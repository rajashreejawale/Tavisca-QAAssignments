import {reversedNumber} from '../../code/TS-QAA3/reverse-a-number';

test('Verify reverse number 3224374 )', () => {
    const input = 3224374; 
    const output = 4734223;
    expect(reversedNumber(input)).toBe(output);
  });

  test('Verify reverse number having zero inbetween 10203004 )', () => {
    const input = 10203004; 
    const output = 40030201;
    expect(reversedNumber(input)).toBe(output);
  });

  //not allowing to enter invalid data
//   test('Verify reverse number ending with zero 123450 )', () => {
//     const input = 123450; 
//     const output = 054321;
//     expect(reversedNumber(input)).toBe(output);
//   });
  //
  test('Verify reverse longer number  1234567890123456789 )', () => {
    const input = 1234567890123456789; 
    const output = 9876543210987654321;
    expect(reversedNumber(input)).toBe(output);
  });

  test('Verify reverse max allowed longer number  1234567890123456 )', () => {
    const input = 1234567890123456; 
    const output = 6543210987654321;
    expect(reversedNumber(input)).toBe(output);
  });