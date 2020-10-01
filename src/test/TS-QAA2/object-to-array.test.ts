import {objectToArrayConersion} from '../../code/TS-QAQ2/object-to-array';

test('Verify object to array conversion )', () => {
    const input = {'a': 1, 'b': 2, 'c': 3}; 
    const output = [["a", 1], ["b", 2], ["c", 3]];
    expect(objectToArrayConersion(input)).toStrictEqual(output);
  });

  test('Verify object to array conversion )', () => {
    const input = {}; 
    const output = [];
    expect(objectToArrayConersion(input)).toStrictEqual(output);
  });