import * as httpClient from '../lib/request';

const url = import.meta.env.VITE_API_ENDPOINT_BASE_URL;
const baseUrl = `${url}data/bookings`;
//const baseUrl = 'https://travel-agency-server-5epb.onrender.com/data/bookings';

export const getAll = async () => {
    const query = new URLSearchParams({
        load: `owner=_ownerId:users,pkg=packageId:packages`,
    });

    const bookings = await httpClient.get(`${baseUrl}?${query}`);
    return Object.values(bookings);
};

export const create = async (bookingData) => {
    const result = await httpClient.post(baseUrl, bookingData)
    return result;
};