import {checkStringPalindrome} from '../../code/TS-QAA3/palindrome-string-check'

test('Verify palindrome string )', () => {
    const input = 'madam'; 
    const output = 'Palindrome';
    expect(checkStringPalindrome(input)).toBe(output);
  });

  test('Verify palindrome string )', () => {
    const input = 'leve'; 
    const output = 'Not Palindrome';
    expect(checkStringPalindrome(input)).toBe(output);
  });

  test('Verify palindrome string )', () => {
    const input = 'No lemon, no melon'; 
    const output = 'Palindrome';
    expect(checkStringPalindrome(input)).toBe(output);
  });