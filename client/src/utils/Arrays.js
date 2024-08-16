export const chunkArray = (array, chunkSize) => {
    if (!Array.isArray(array)) {
        return [];
    }

    if (chunkSize <= 0) {
        return array;
    }

    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    
    return chunks;
};