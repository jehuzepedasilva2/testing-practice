const ftt = require('./FunctionsToTest.js'); // functions to test (object)

const helloString = 'hello';
const myName = 'jehu';

test('capitalize "hello"', () => {
  expect(ftt.capitalize(helloString)).toMatch(/Hello/);
})

test('capitalize my name', () => {
  expect(ftt.capitalize(myName)).toMatch(/Jehu/);
})