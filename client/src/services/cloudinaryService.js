import * as httpClient from '../lib/request';

export const create = async (formData) => {
    const response = await fetch(
        import.meta.env.VITE_API_CLODINARY_CLOUD,
        {
            method: 'POST',
            body: formData,
        }
    );

    const data = await response.json();
    return data.secure_url;
};

