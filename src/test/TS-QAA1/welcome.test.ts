import {welcomeMessage} from '../../code/TS-QAA1/welcome';

test('verify welcome greeting message', ()=>{
    const input = 'Rajashri';
    const output ='Welcome Rajashri to Tavisca'
    expect(welcomeMessage(input)).toBe(output);
})

test('verify welcome greeting message for blank name', ()=>{
    const input = '';
    const output ='Welcome  to Tavisca'
    expect(welcomeMessage(input)).toBe(output);
})

test('verify welcome greeting message for blank name', ()=>{
    const input = '  ';
    const output ='Welcome    to Tavisca'
    expect(welcomeMessage(input)).toBe(output);
})
