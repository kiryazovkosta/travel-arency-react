import * as httpClient from '../lib/request'

const baseUrl = 'http://localhost:3030/data/reviews';

export const getAll = async (packageId) => {
    const query = new URLSearchParams({
        where: `packageId="${packageId}"`,
        load: `owner=_ownerId:users`,
    });

    const result = await request.get(`${baseUrl}?${query}`);
    return result;
};

export const create = async (packageId, text, stars) => {
    const newReview = await request.post(baseUrl, {
        packageId,
        text,
        stars
    });

    return newReview;
};