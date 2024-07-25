import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/packages';

export const getById = async (packageId) => {
    const result = await httpClient.get(`${baseUrl}/${packageId}`);
    return result;
};

export const getAll = async () => {
    const packages = await httpClient.get(baseUrl);
    return Object.values(packages);
};

export const create = async (packageData) => {
    const result = await httpClient.post(baseUrl, packageData)
    return result;
};