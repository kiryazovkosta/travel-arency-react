import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/data/bookings';

export const getAll = async () => {
    const packages = await httpClient.get(baseUrl);
    return Object.values(packages);
};

export const create = async (bookingData) => {
    const result = await httpClient.post(baseUrl, bookingData)
    return result;
};