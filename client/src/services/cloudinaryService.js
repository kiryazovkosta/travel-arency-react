import * as httpClient from '../lib/request';

export const create = async (formData) => {
    const response = await fetch(
        `https://api.cloudinary.com/v1_1/dfn7thtsx/image/upload`,
        {
            method: 'POST',
            body: formData,
        }
    );

    const data = await response.json();
    return data.secure_url;
};

