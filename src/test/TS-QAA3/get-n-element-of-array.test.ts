import {getfirstElementRecurssion} from  '../../code/TS-QAA3/get-n-element-of-array';

test('Get first elements, n not specified', () => {
  const input1 = [7, 8, 1, 2];
  const expectedoutput = [7];
  expect(getfirstElementRecurssion(input1)).toStrictEqual(expectedoutput);
});

test('Get first elements, n specified', () => {
  const input1 = [7, 8, 1, 2];
  const input2 = 2;
  const expectedoutput =[7, 8] ;
  expect(getfirstElementRecurssion(input1,input2)).toStrictEqual(expectedoutput);
});

test('Get first elements, n (-ve) specified', () => {
  const input1 = [7, 8, 1, 2];
  const input2 = -3;
  const expectedoutput =[] ;
  expect(getfirstElementRecurssion(input1,input2)).toStrictEqual(expectedoutput);
});

test('Empty array, n not specified', () => {
  const input1 = [];
  const expectedoutput = [ undefined ];
  expect(getfirstElementRecurssion(input1)).toStrictEqual(expectedoutput);
});

// using slice method
test('Get first elements, n not specified', () => {
  const input1 = [7, 8, 1, 2];
  const expectedoutput = [7];
  expect(getfirstElementRecurssion(input1)).toStrictEqual(expectedoutput);
});

test('Get first elements, n specified', () => {
  const input1 = [7, 8, 1, 2];
  const input2 = 2;
  const expectedoutput =[7, 8] ;
  expect(getfirstElementRecurssion(input1,input2)).toStrictEqual(expectedoutput);
});

test('Get first elements, n (-ve) specified', () => {
  const input1 = [7, 8, 1, 2];
  const input2 = -3;
  const expectedoutput =[] ;
  expect(getfirstElementRecurssion(input1,input2)).toStrictEqual(expectedoutput);
});


