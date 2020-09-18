const getSmallestElement = require('../../code/JS-QAA1/array-smallest-element-02');

test('Verify smallest element of array ', () => {
    const input = [1,2,4,6,2];
    const expectedOutput = 1;
    expect(getSmallestElement(input)).toBe(expectedOutput);
});

test('Verify smallest element of array if negative ', () => {
    const input = [3,4,6,-2];
    const expectedOutput = -2;
    expect(getSmallestElement(input)).toBe(expectedOutput);
});

test('Verify smallest element of array if float', () => {
    const input = [3,4,6,1.2];
    const expectedOutput = 1.2;
    expect(getSmallestElement(input)).toBe(expectedOutput);
});


test('Verify smallest element of array if string', () => {
    const input = [3,4,6,'a'];
    const expectedOutput = 3;
    expect(getSmallestElement(input)).toBe(expectedOutput);
});

test('Verify smallest element of array if empty array', () => {
    const input = [];
    const expectedOutput = undefined;
    expect(getSmallestElement(input)).toBe(expectedOutput);
});

