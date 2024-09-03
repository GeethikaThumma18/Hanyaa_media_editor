

from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from .views import CreateDefaultUserView, ImageListView, FolderListView, transform_image, ApiRootView

urlpatterns = [
    path('', ApiRootView.as_view(), name='api_root'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('create-default-user/', CreateDefaultUserView.as_view(), name='create_default_user'),
    path('ColorPalette/Dataset/', FolderListView.as_view(), name='folder_list'),
    path('ColorPalette/Dataset/<str:folder_name>/', ImageListView.as_view(), name='image_list'),
    path('api/transform/', transform_image, name='transform_image'),
]
