import { get } from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/packages';

export const getAll = async () => {
    const packages = await get(baseUrl);
    return Object.values(packages);
};

export const create = async (gameData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();
    return result;
};