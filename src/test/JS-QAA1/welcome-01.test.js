const welcomeMessage = require('../../code/JS-QAA1/welcome-01');

test('Verify for welcome message with username', () => {
    const input = 'Rajashri';
    const expectedOutput = 'Welcome Rajashri to Tavisca';
    expect(welcomeMessage(input)).toBe(expectedOutput);
  });


test('Verify for welcome message when username is empty', () => {
    const input = '';
    const expectedOutput = 'Welcome  to Tavisca';
    expect(welcomeMessage(input)).toBe(expectedOutput);
  });  

test('Verify for welcome message when username is empty', () => {
    const input =`D'souza`;
    const expectedOutput = `Welcome D'souza to Tavisca`;
    expect(welcomeMessage(input)).toBe(expectedOutput);
  }); 


