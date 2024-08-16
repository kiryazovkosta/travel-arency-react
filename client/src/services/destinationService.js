import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/data/destinations';
//const baseUrl = 'https://travel-agency-server-5epb.onrender.com/data/destinations';

export const getAll = async () => {
    const packages = await httpClient.get(baseUrl);
    return Object.values(packages);
};

export const create = async (destination) => {
    const result = await httpClient.post(baseUrl, destination)
    return result;
}