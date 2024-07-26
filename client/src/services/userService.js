import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/users';

export const login = async (email, password) => {
    const result = await httpClient.post(`${baseUrl}/login`, {
        email,
        password
    });

    return result;
}