/* eslint-disable */
import { splitArray } from './ArrayUtils';

describe('Test Array Utils', () => {
    test('should have return split array', () => {
        const data = [1, 2, 3, 4, 5, 6, 7];
        const newArray = splitArray(data, 2);
        expect(newArray.length).toEqual(4);
        expect(splitArray([], 2).length).toEqual(0);
    });
});
