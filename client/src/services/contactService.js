import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/contacts';
//const baseUrl = 'https://travel-agency-server-5epb.onrender.com/jsonstore/contacts';

export const getAll = async () => {
    const packages = await httpClient.get(baseUrl);
    return Object.values(packages);
};

export const create = async (contactData) => {
    const result = await httpClient.post(baseUrl, contactData)
    return result;
};