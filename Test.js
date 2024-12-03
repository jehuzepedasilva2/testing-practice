const ftt = require('./FunctionsToTest.js'); // functions to test (object)

const helloString = 'hello';

test('capitalize "hello"', () => {
  expect(fft.capitalize(helloString)).toMatch(/Hello/);
})