import * as httpClient from '../lib/request';

//const baseUrl = 'http://localhost:3030/data/teams';
const baseUrl = 'https://travel-agency-server-5epb.onrender.com/data/teams';

export const getAll = async () => {
    const packages = await httpClient.get(baseUrl);
    return Object.values(packages);
};
