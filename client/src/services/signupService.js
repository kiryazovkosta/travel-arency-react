import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/signup';

export const existsEmail = async (email) => {
    const result = await httpClient.get(baseUrl);
    const records = Object.values(result).filter(su => su.email == email);
    return records.length > 0;
};

export const create = async (email) => {
    console.log(email);
    const result = await httpClient.post(baseUrl, { "email": email});
    return result;
}