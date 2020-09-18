const checkPalindrome = require('../../code/JS-QAA3/palindrome-string-check');
const checkStringPalindrome = require('../../code/JS-QAA3/palindrome-string-check');

test('Verify if number is palindrome', () => {
    const input = 'level';
    const expectedoutput = 'Palindrome';
    expect(checkPalindrome(input)).toBe(expectedoutput);
});

test('Verify if number is not a palindrome', () => {
    const input = 'level1';
    const expectedoutput = 'Not Palindrome';
    expect(checkPalindrome(input)).toBe(expectedoutput);
});

//
test('Verify if number is palindrome', () => {
    const input = 'level';
    const expectedoutput = 'Palindrome';
    expect(checkStringPalindrome(input)).toBe(expectedoutput);
});

test('Verify if number is not a palindrome', () => {
    const input = 'level1';
    const expectedoutput = 'Not Palindrome';
    expect(checkStringPalindrome(input)).toBe(expectedoutput);
});