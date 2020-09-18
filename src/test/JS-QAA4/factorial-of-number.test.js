const factorial = require('../../code/JS-QAA4/factorial-of-number');

test('Verify for positive integer factorial', () => {
    const input = 5;
    const expectedOutput = 120
    expect(factorial(input)).toBe(expectedOutput);
  });

test('verify for negative integer factorial', () => {
    const input = -3;
    const expectedOutput = 'Provide postive integer';
    expect(factorial(input)).toBe(expectedOutput);
});

test('verify for zero factorial ', () => {
    const input = 0;
    const expectedOutput = 1
    expect(factorial(input)).toBe(expectedOutput);
});