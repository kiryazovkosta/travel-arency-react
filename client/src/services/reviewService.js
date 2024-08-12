import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/data/reviews';

export const getAll = async (packageId) => {
    const query = new URLSearchParams({
        where: `packageId="${packageId}"`,
        load: `owner=_ownerId:users`,
    });

    const order = '&sortBy=_createdOn%20desc'

    const result = await httpClient.get(`${baseUrl}?${query}${order}`);
    return result;
};

export const getById = async (reviewId) => {
    const result = await httpClient.get(`${baseUrl}/${reviewId}`);
    return result;
};

export const create = async (reviewData) => {
    const newReview = await httpClient.post(baseUrl, reviewData);

    return newReview;
};

export const edit = async (reviewId, reviewData) => {
    const newReview = await httpClient.put(`${baseUrl}/${reviewId}`, reviewData);
    return newReview;
};

export const remove = async (reviewId) => {
    httpClient.remove(`${baseUrl}/${reviewId}`);
};