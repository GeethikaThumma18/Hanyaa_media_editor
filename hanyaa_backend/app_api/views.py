from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth.models import User
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
 
class CreateDefaultUserView(APIView):
    permission_classes = [AllowAny]
 
    def get(self, request):
        if not User.objects.filter(username='Hanyaa').exists():
            User.objects.create_user(username='Hanyaa@', password='Hanyaa@4')
        return Response({'status': 'Default user created'}, status=status.HTTP_200_OK)
 
class LoginView(TokenObtainPairView):
    permission_classes = [AllowAny]
 
 
 
 
 
from django.http import JsonResponse
from django.views import View

class ApiRootView(View):
    def get(self, request):
        return JsonResponse({
            'token': '/api/token/',
            'token_refresh': '/api/token/refresh/',
            'create_default_user': '/api/create-default-user/',
            'folder_list': '/api/ColorPalette/Dataset/',
            'image_list': '/api/ColorPalette/Dataset/<str:folder_name>/',
            'transform_image': '/api/transform/'
        })

# views.py
import os
from django.conf import settings
from django.http import JsonResponse
from django.views import View
 
class FolderListView(View):
    def get(self, request):
        dataset_path = os.path.join(settings.MEDIA_ROOT, 'Dataset')
        if not os.path.exists(dataset_path):
            return JsonResponse({'error': 'Dataset folder not found'}, status=404)
 
        folders = [{'name': f} for f in os.listdir(dataset_path) if os.path.isdir(os.path.join(dataset_path, f))]
        return JsonResponse({'folders': folders}, safe=False, json_dumps_params={'indent': 2})
 
class ImageListView(View):
    def get(self, request, folder_name):
        dataset_path = os.path.join(settings.MEDIA_ROOT, 'Dataset', folder_name)
        if not os.path.exists(dataset_path):
            return JsonResponse({'error': 'Folder not found'}, status=404)
 
        image_files = [
            {
                'name': f,
                'url': request.build_absolute_uri(settings.MEDIA_URL + 'Dataset/' + folder_name + '/' + f)
            }
            for f in os.listdir(dataset_path) if os.path.isfile(os.path.join(dataset_path, f))
        ]
        return JsonResponse({'images': image_files}, safe=False, json_dumps_params={'indent': 2})



from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image, UnidentifiedImageError
import numpy as np
import base64
import json
import requests
from io import BytesIO

def decode_image(image_data):
    try:
        if not image_data.startswith('data:image/'):
            raise ValueError("Invalid image data format")
        header, encoded = image_data.split(',', 1)
        image = Image.open(BytesIO(base64.b64decode(encoded)))
        return image
    except Exception as e:
        print(f"Error decoding image: {e}")
        raise

def getCDF(image_channel):
    hist, bin_edges = np.histogram(image_channel.flatten(), bins=256, range=[0, 256])
    cdf = hist.cumsum()
    cdf_normalized = cdf * hist.max() / cdf.max()
    return cdf_normalized

def histMatch(cdf_input, cdf_template, image_channel):
    cdf_input_normalized = (cdf_input - cdf_input.min()) * 255 / (cdf_input.max() - cdf_input.min())
    cdf_template_normalized = (cdf_template - cdf_template.min()) * 255 / (cdf_template.max() - cdf_template.min())
    matched_channel = np.interp(image_channel.flatten(), np.arange(256), cdf_template_normalized).reshape(image_channel.shape)
    return matched_channel

@csrf_exempt
def transform_image(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            uploaded_image_data = data.get('uploaded_image')
            template_image_url = data.get('template_image')

            uploaded_image = decode_image(uploaded_image_data)

            response = requests.get(template_image_url)
            if response.status_code == 200:
                template_image = Image.open(BytesIO(response.content))
            else:
                return JsonResponse({'error': 'Failed to fetch template image'}, status=400)

            uploaded_image_array = np.array(uploaded_image)
            template_image_array = np.array(template_image)
            imageResult = np.zeros_like(uploaded_image_array)
            for channel in range(3):
                cdfInput = getCDF(uploaded_image_array[:, :, channel])
                cdfTemplate = getCDF(template_image_array[:, :, channel])
                imageResult[:, :, channel] = histMatch(cdfInput, cdfTemplate, uploaded_image_array[:, :, channel])
            result_image = Image.fromarray(imageResult)

            buffered = BytesIO()
            result_image.save(buffered, format="PNG")
            transformed_image_data = base64.b64encode(buffered.getvalue()).decode('utf-8')

            return JsonResponse({'transformed_image': f'data:image/png;base64,{transformed_image_data}'})

        except UnidentifiedImageError:
            return JsonResponse({'error': 'Cannot identify uploaded image file'}, status=400)
        except Exception as e:
            print(f"Error: {e}")
            return JsonResponse({'error': 'Internal server error', 'details': str(e)}, status=500)
    else:
        return JsonResponse({'error': 'Method not allowed'}, status=405)


