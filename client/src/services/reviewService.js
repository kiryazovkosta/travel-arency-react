import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/data/reviews';

export const getAll = async (packageId) => {
    const query = new URLSearchParams({
        where: `packageId="${packageId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await httpClient.get(`${baseUrl}?${query}`);
    return result;
};

export const create = async (reviewData) => {
    const newReview = await httpClient.post(baseUrl, reviewData);

    return newReview;
};