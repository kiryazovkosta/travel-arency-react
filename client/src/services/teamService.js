import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/teams';

export const getAll = async () => {
    const packages = await httpClient.get(baseUrl);
    return Object.values(packages);
};