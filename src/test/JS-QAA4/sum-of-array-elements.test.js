const sumOfArrayElements = require('../../code/JS-QAA4/sum-of-array-elements');
const sumOfArrayElements1 = require('../../code/JS-QAA4/sum-of-array-elements');

test('Verify sum of array elements', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput= 15;
    expect(sumOfArrayElements(input)).toBe(expectedOutput);
});


test('Verify sum of array elements for empty array', () => {
    const input = [];
    const expectedOutput= 0;
    expect(sumOfArrayElements(input)).toStrictEqual(expectedOutput);
});

test('Verify sum of array elements when -ve elements', () => {
    const input = [1, 2, 3, 4, -5];
    const expectedOutput= 5;
    expect(sumOfArrayElements(input)).toBe(expectedOutput);
});


test('Verify sum of array elements when float elements', () => {
    const input = [1, 2, 3, 4, 5.5];
    const expectedOutput= 15.5;
    expect(sumOfArrayElements(input)).toBe(expectedOutput);
});


test('Verify sum of array elements', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput= 15;
    expect(sumOfArrayElements1(input)).toBe(expectedOutput);
});


test('Verify sum of array elements for empty array', () => {
    const input = [];
    const expectedOutput= 0;
    expect(sumOfArrayElements1(input)).toStrictEqual(expectedOutput);
});


test('Verify sum of array elements when -ve elements', () => {
    const input = [1, 2, 3, 4, -5];
    const expectedOutput= 5;
    expect(sumOfArrayElements1(input)).toBe(expectedOutput);
});


test('Verify sum of array elements when float elements', () => {
    const input = [1, 2, 3, 4, 5.5];
    const expectedOutput= 15.5;
    expect(sumOfArrayElements1(input)).toBe(expectedOutput);
});