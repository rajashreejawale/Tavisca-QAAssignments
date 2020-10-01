  import {totalAnimalLegs} from '../../code/TS-QAQ2/animal-leg-count';

  test('Verify animal leg count )', () => {
    const input = [
        {'animalname' :'chicken', 'animalleg' : 2,'animalcount' : 1}, 
        {'animalname':'cow', 'animalleg' : 4, 'animalcount' : 1},
        {'animalname':'pig', 'animalleg' : 4, 'animalcount' : 1},
        {'animalname':'spider', 'animalleg' : 8, 'animalcount' : 3},
        ];
    const output = 34;
    expect(totalAnimalLegs(input)).toBe(output);
  });

  test('Verify animal leg count )', () => {
    const input = [
        {'animalname' :'chicken', 'animalleg' : 2,'animalcount' : 1}, 
        {},
        {'animalname':'pig', 'animalleg' : 4, 'animalcount' : 1},
        {'animalname':'spider', 'animalleg' : 8, 'animalcount' : 3},
        ];
    const output = "One of the Element is empty, please correct data";
    expect(totalAnimalLegs(input)).toBe(output);
  });