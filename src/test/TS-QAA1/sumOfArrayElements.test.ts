import { sumOfArrayElementsUsingReduceMethod } from '../../code/TS-QAA1/sumOfArrayElements' ; 


test('Verify sum of array elements', () => {
    const input = [1, 2, 3, 4, 5];
    const expectedOutput= 15;
    expect(sumOfArrayElementsUsingReduceMethod(input)).toBe(expectedOutput);
});


test('Verify sum of array elements for empty array', () => {
    const input = [];
    const expectedOutput= 0;
    expect(sumOfArrayElementsUsingReduceMethod(input)).toStrictEqual(expectedOutput);
});


test('Verify sum of array elements when -ve elements', () => {
    const input = [1, 2, 3, 4, -5];
    const expectedOutput= 5;
    expect(sumOfArrayElementsUsingReduceMethod(input)).toBe(expectedOutput);
});


test('Verify sum of array elements when float elements', () => {
    const input = [1, 2, 3, 4, 5.5];
    const expectedOutput= 15.5;
    expect(sumOfArrayElementsUsingReduceMethod(input)).toBe(expectedOutput);
});