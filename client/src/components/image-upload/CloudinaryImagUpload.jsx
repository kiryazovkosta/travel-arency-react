import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as cloudinaryService from '../../services/cloudinaryService'

function CloudinaryImagUpload() {
    const [file, setFile] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState('');

    const handleFileChange = (e) => {
        setUploadedUrl('');
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        if (!file) {
            toast.error("Please select a file first!");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'oqnatpgc');

        try {
            const secure_url = await cloudinaryService.create(formData);
            setUploadedUrl(secure_url);
        } catch (error) {
            console.error('Error uploading the file:', error);
            toast.error('Error uploading the file');
        }
    };

    return (
        <div >
            <h2>Upload a file to Cloudinary</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>

            {uploadedUrl && (
                <div>
                    <h3>Uploaded Image:</h3>
                    <img src={uploadedUrl} alt="Uploaded File" />
                    <p>Copy this url: {uploadedUrl}</p>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default CloudinaryImagUpload;