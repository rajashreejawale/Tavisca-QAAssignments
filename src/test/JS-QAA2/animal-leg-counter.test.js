const totalAnimalLegs = require('../../code/JS-QAA2/animal-leg-counter')

test('Verify animal leg count' , () => {
    input = [
        {'animalname' :'chicken', 'animalleg' : 2,'animalcount' : 1}, 
        {'animalname':'cow', 'animalleg' : 4, 'animalcount' : 1},
        {'animalname':'pig', 'animalleg' : 4, 'animalcount' : 1},
        {'animalname':'spider', 'animalleg' : 8, 'animalcount' : 3},
        ];
    expectedOutput = 34 ;
    expect(totalAnimalLegs(input)).toBe(expectedOutput);
});

test('Verify animal leg count when no animals provided' , () => {
    input = [];
    expectedOutput = 0 ;
    expect(totalAnimalLegs(input)).toBe(expectedOutput);
});

test('Verify animal leg count when animal count is negative' , () => {
    input = [{'animalname' :'chicken', 'animalleg' : 2,'animalcount' : -2}];
    expectedOutput = 'Please enter positive animal count' ;
    expect(totalAnimalLegs(input)).toBe(expectedOutput);
});

test('Verify animal leg count when one of the animal details are empty' , () => {
    input = [{'animalname' :'chicken', 'animalleg' : 2,'animalcount' : 2}, {}];
    expectedOutput = 'One of the Element is empty, please correct data' ;
    expect(totalAnimalLegs(input)).toBe(expectedOutput);
});


