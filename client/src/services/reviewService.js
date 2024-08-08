import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/jsonstore/reviews';

export const getAll = async (packageId) => {
    // const query = new URLSearchParams({
    //     where: `packageId="${packageId}"`,
    //     load: `owner=_ownerId:users`,
    // });

    // const result = await httpClient.get(`${baseUrl}?${query}`);
    // return result;

    const result = await httpClient.get(baseUrl);
    return Object.values(result);
};

export const create = async (packageId, username, text, stars) => {
    const newReview = await httpClient.post(baseUrl, {
        packageId,
        username,
        text,
        stars
    });

    return newReview;
};