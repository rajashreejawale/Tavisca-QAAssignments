// const reversedNumber =require('../../code/JS-QAA3/reverse-a-number');
// const reverseNumberTraditionalway =require('../../code/JS-QAA3/reverse-a-number');
const reverse = require('../../code/JS-QAA3/reverse-a-number');

test('Verify reverse number for number', () => {
    const input =23454;
    const expectedoutput = 45432;
    expect(reverse.reversedNumber(input)).toBe(expectedoutput);
});

test('Verify reverse number when number ends with 0', () => {
    const input =230;
    const expectedoutput = 032;
    expect(reverse.reversedNumber(input)).toBe(expectedoutput);
});

test('Verify reverse number when number is float no', () => {
    const input =230.45;
    const expectedoutput = 54.032;
    expect(reverse.reversedNumber(input)).toBe(expectedoutput);
});
test('Verify reverse number when number is too large(17 digit long)', () => {
    const input =12345678901234567;
    const expectedoutput = 76543210987654321;
    expect(reverse.reversedNumber(input)).not.toBe(expectedoutput);
});

//
test('Verify reverse number for number', () => {
    const input =23454;
    const expectedoutput = 45432;
    expect(reverse.reverseNumberTraditionalway(input)).toBe(expectedoutput);
});

test('Verify reverse number when number ends with 0', () => {
    const input =230;
    const expectedoutput = 032;
    expect(reverse.reverseNumberTraditionalway(input)).toBe(expectedoutput);
});

test('Verify reverse number when number is float no', () => {
    const input =230.45;
    const expectedoutput = 54.032;
    expect(reverse.reverseNumberTraditionalway(input)).toBe(expectedoutput);
});
test('Verify reverse number when number is too large(17 digit long)', () => {
    const input =12345678901234567;
    const expectedoutput = 76543210987654321;
    expect(reverse.reverseNumberTraditionalway(input)).not.toBe(expectedoutput);
});