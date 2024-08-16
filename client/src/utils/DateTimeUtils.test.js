import { formatDate } from './DateTimeUtils';

describe('formatDate', () => {
    test('Should format a valid timestamp correctly', () => {
        const timestamp = new Date(2023, 7, 15, 14, 5, 9);
        expect(formatDate(timestamp)).toBe('15.08.2023 14:05:09');
    });

    test('Should handle single-digit day, month, hour, minute, and second correctly', () => {
        const timestamp = new Date(2023, 0, 1, 3, 4, 5);
        expect(formatDate(timestamp)).toBe('01.01.2023 03:04:05');
    });

    test('Should handle timestamps at the start and end of the year correctly', () => {
        const startOfYear = new Date(2023, 0, 1, 0, 0, 0);
        const endOfYear = new Date(2023, 11, 31, 23, 59, 59);
        
        expect(formatDate(startOfYear)).toBe('01.01.2023 00:00:00');
        expect(formatDate(endOfYear)).toBe('31.12.2023 23:59:59');
    });
});