import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/data/destinations';

export const getAll = async () => {
    const packages = await httpClient.get(baseUrl);
    return Object.values(packages);
};