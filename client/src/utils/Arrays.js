export const chunkArray = (array, chunkSize) => {
    if (!Array.isArray(array)) {
        return [];
    }

    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    
    return chunks;
};