export function splitArray(array, max, newArray) {
    if (array.length === 0) return newArray;
    return splitArray(array.slice(max), max, [
        ...newArray,
        array.slice(0, max),
    ]);
}
