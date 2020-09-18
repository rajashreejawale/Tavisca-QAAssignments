const calculation = require('../../../../Calculator/Typescript-Starter/src/calculator1');

test('Calc', () => {
    document.getElementById('inputVal')= '5+4';
    const expectedOutput = 9;
    expect(calculation()).toBe(expectedOutput);
  });