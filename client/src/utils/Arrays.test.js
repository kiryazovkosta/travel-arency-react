import { chunkArray } from './Arrays';

describe('chunkArray', () => {
    test('Should return an empty array when input is not an array', () => {
        expect(chunkArray(null, 2)).toEqual([]);
        expect(chunkArray(undefined, 2)).toEqual([]);
        expect(chunkArray(123, 2)).toEqual([]);
        expect(chunkArray('string', 2)).toEqual([]);
    });

    test('Should return an empty array when input array is empty', () => {
        expect(chunkArray([], 2)).toEqual([]);
    });

    test('Should split an array into chunks of specified size', () => {
        expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
        expect(chunkArray([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
        expect(chunkArray([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]]);
    });

    test('Should handle chunk sizes larger than the array length', () => {
        expect(chunkArray([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
    });

    test('Should handle chunk sizes of 1', () => {
        expect(chunkArray([1, 2, 3, 4], 1)).toEqual([[1], [2], [3], [4]]);
    });

    test('Should handle chunk sizes equal to 0', () => {
        expect(chunkArray([1, 2, 3, 4], 0)).toEqual([1, 2, 3, 4]);
    });

    test('Should handle chunk sizes less than 0', () => {
        expect(chunkArray([1, 2, 3, 4], -1)).toEqual([1, 2, 3, 4]);
        expect(chunkArray([1, 2, 3, 4], -2)).toEqual([1, 2, 3, 4]);
    });
});