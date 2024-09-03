

import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import './ColorPalette.css';
import axios from 'axios';
import backgroundImage from './assets/white-bg.jpg'; 

const ColorPalette = () => {
    const [uploadedImage, setUploadedImage] = useState(null);
    const [transformedImage, setTransformedImage] = useState(null);
    const [images, setImages] = useState([]);
    const [selectedFolder, setSelectedFolder] = useState('');
    const [folders, setFolders] = useState(['Beach', 'City', 'Forest', 'Mountains', 'Rainfall', 'Snow', 'Sunset']);
    const [view, setView] = useState('folderSelection'); 
    const [imagePending, setImagePending] = useState(false); 
    const [backButtonClicked, setBackButtonClicked] = useState(false); 
    const [clickedButton, setClickedButton] = useState(''); 

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            const file = acceptedFiles[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedImage(e.target.result);
                setImagePending(true); 
            };
            reader.readAsDataURL(file);
        },
    });

    const correctBase64Padding = (base64String) => {
        const missingPadding = base64String.length % 4;
        if (missingPadding) {
            return base64String + '='.repeat(4 - missingPadding);
        }
        return base64String;
    };

    const transformImage = async (templateUrl) => {
        if (uploadedImage) {
            try {
                const base64String = uploadedImage.split(',')[1];
                const formattedBase64String = correctBase64Padding(base64String);
                const paddedUploadedImage = `data:image/png;base64,${formattedBase64String}`;

                const response = await axios.post('http://localhost:8000/api/transform/', {
                    uploaded_image: paddedUploadedImage,
                    template_image: templateUrl
                });
                setTransformedImage(response.data.transformed_image);
            } catch (error) {
                console.error('Error transforming image:', error);
            }
        }
    };

    const fetchImages = async (folder) => {
        try {
            const response = await fetch(`http://localhost:8000/api/ColorPalette/Dataset/${folder}/`);
            const imageFiles = await response.json();
            setImages(imageFiles.images);  
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        if (selectedFolder) {
            fetchImages(selectedFolder);
        }
    }, [selectedFolder]);

    const handleFolderSelect = (folder) => {
        setSelectedFolder(folder);
        setView('templateSelection'); 
    };

    const handleBackButtonClick = () => {
        setView('folderSelection'); 
        setSelectedFolder(''); 
        setImages([]); 
        setBackButtonClicked(true); 
    };

    const handleCancelClick = () => {
        setUploadedImage(null); 
        setImagePending(false); 
        setClickedButton('cancel'); 
    };

    const handleOkClick = () => {
        setImagePending(false); 
        setClickedButton('ok'); 
    };

    return (
        <div className="color-palette-container">
            <header>
                <h1>Color Transform From Image to Image</h1>
            </header>
            <main className="main-content">
                <div className="left-column">
                    <section className="dataset-section">
                        {view === 'folderSelection' && (
                            <>
                                <p className="centered-text">Please select a folder you want to apply Color Transformation.</p>
                                <div className="select-folder">
                                    <select onChange={(e) => handleFolderSelect(e.target.value)} value={selectedFolder}>
                                        <option value="">Select a folder</option>
                                        {folders.map((folder, index) => (
                                            <option key={index} value={folder}>{folder}</option>
                                        ))}
                                    </select>
                                </div>
                            </>
                        )}
                        {view === 'templateSelection' && (
                            <>
                                <div className="template-header">
                                    <button className={`back-button ${backButtonClicked ? 'clicked' : ''}`} onClick={handleBackButtonClick}>
                                        <i className="fas fa-arrow-left"></i>
                                    </button>
                                    <h2>Select a Template Image</h2>
                                </div>
                                <div className="images-grid">
                                    {images.length > 0 ? (
                                        images.map((image, index) => (
                                            <div key={index} className="image-item" onClick={() => transformImage(image.url)}>
                                                <img src={image.url} alt={`Dataset ${index}`} />
                                            </div>
                                        ))
                                    ) : (
                                        <p className="centered-text">No images found in the selected folder.</p>
                                    )}
                                </div>
                            </>
                        )}
                    </section>
                </div>
                <div className="right-column">
                    <section className="upload-section">
                        <h2>Upload Your Image</h2>
                        <div {...getRootProps({ className: 'dropzone' })}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop an image here, or click to select one</p>
                        </div>
                        {uploadedImage && (
                            <div className="uploaded-image">
                                <img src={uploadedImage} alt="Uploaded" />
                            </div>
                        )}
                        {imagePending && (
                            <div className="image-actions">
                                <button 
                                    className={`ok-button ${clickedButton === 'ok' ? 'clicked' : ''}`} 
                                    onClick={handleOkClick}
                                >
                                    OK
                                </button>
                                <button 
                                    className={`cancel-button ${clickedButton === 'cancel' ? 'clicked' : ''}`} 
                                    onClick={handleCancelClick}
                                >
                                    Clear
                                </button>
                            </div>
                        )}
                    </section>

                    {transformedImage && (
                        <section className="result-section">
                            <h3>Transformed Image</h3>
                            <div className="transformed-image">
                                <img src={transformedImage} alt="Transformed" />
                            </div>
                            <a href={transformedImage} download="transformed_image.png">
                                <button>Download</button>
                            </a>
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
};

export default ColorPalette;
