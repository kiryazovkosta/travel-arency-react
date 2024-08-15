import * as httpClient from '../lib/request';

const baseUrl = 'http://localhost:3030/data/packages';
//const baseUrl = 'https://travel-agency-server-5epb.onrender.com/data/packages';

export const getById = async (packageId) => {
    const result = await httpClient.get(`${baseUrl}/${packageId}`);
    return result;
};

export const getAll = async () => {
    const packages = await httpClient.get(baseUrl);
    return Object.values(packages);
};

export const create = async (packageData) => {
    const result = await httpClient.post(baseUrl, packageData)
    return result;
};

export const search = async (value) => {
    // // Server does not works as I expect
    // const query = new URLSearchParams({
    //     where: `title LIKE "${value}"`
    // });

    // const packages = await httpClient.get(`${baseUrl}?${query}`);
    // return Object.values(packages);

        // // Server does not works as I expect
    // const query = new URLSearchParams({
    //     where: `title LIKE "${value}"`
    // });

    const result = await httpClient.get(baseUrl);
    var packages = Object.values(result);
    console.log(packages);
    
    const filtered = packages.filter(p => p.title.includes(value));
    console.log(filtered);

    return filtered;
};