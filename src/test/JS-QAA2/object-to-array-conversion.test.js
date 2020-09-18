const objectToArrayConersion = require('../../code/JS-QAA2/object-to-array-conversion');

test('Verify Object conversion to array' , () => {
    input= {'a': 1, 'b': 2};
    expectedOutput= [ [ 'a', 1 ], [ 'b', 2 ] ] ;
    expect(objectToArrayConersion(input)).toStrictEqual(expectedOutput);
});

test('Verify Empty Object conversion to array' , () => {
    input= {};
    expectedOutput= [] ;
    expect(objectToArrayConersion(input)).toStrictEqual(expectedOutput);
});