const ftt = require('./FunctionsToTest.js'); // functions to test (object)

const helloString = 'hello';
const myName = 'jehu';

test('capitalize "hello"', () => {
  expect(fft.capitalize(helloString)).toMatch(/Hello/);
})

test('capitalize my name', () => {
  expect(fft.capitalize(myName)).toMatch(/Jehu/);
})