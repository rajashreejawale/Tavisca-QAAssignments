const divisibleByCheck = require('../../code/JS-QAA1/divisible-by-check-03');

test('Verify if no is divisible by 3,5,15',() => {
    const input = [100, 3, 6, 30];
    const expectedoutput = [ '100 divisible by 5', '3 divisible by 3', '6 divisible by 3',
    '30 divisible by 15'];
    expect(divisibleByCheck(input)).toStrictEqual(expectedoutput);

});

test('Verify if number is not divisible by 3,5,15',() => {
    const input = [100, 8];
    const expectedoutput = [ '100 divisible by 5', '8 is not divisible by 3, 5 and 15' ]
    expect(divisibleByCheck(input)).toStrictEqual(expectedoutput);

});
