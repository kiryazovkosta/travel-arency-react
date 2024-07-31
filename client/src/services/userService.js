import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await httpClient.post(`${baseUrl}/login`, {
        email,
        password
    });

    return result;
}

export const register = async (email, password, username, avatar) => {
    const result = await httpClient.post(`${baseUrl}/register`, {
        email,
        password,
        username,
        avatar,
        isAdmin: false,
    });

    return result;
}

export const logout = async () => {
    await httpClient.get(`${baseUrl}/logout`);
}

export const details = async () => {
    const result = await httpClient.get(`${baseUrl}/me`);
    return result;
}