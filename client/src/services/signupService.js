import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/signup';
//const baseUrl = 'https://travel-agency-server-5epb.onrender.com/jsonstore/signup';

export const getAll = async () => {
    const result = await httpClient.get(baseUrl);
    return Object.values(result);
};

export const existsEmail = async (email) => {
    const result = await httpClient.get(baseUrl);
    const records = Object.values(result).filter(su => su.email == email);
    return records.length > 0;
};

export const create = async (email) => {
    const result = await httpClient.post(baseUrl, { "email": email});
    return result;
}