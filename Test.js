// it and test are the same
const ftt = require('./FunctionsToTest.js'); // functions to test (object)

const strings = {
  helloString: 'hello',
  myName: 'jehu', 
  smallSentence: 'hello my name is Jehu',
  randomString: 'xyz',
  HeLLoString: 'HeLLo',
  HelloWorldString: 'Hello, World!',
};

const arrays = {
  sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9], 
  unsorted: [4, 1, 9, 6, 7, 2, 3, 8, 5]
}

describe('Testing capitalize() function', () => {
  it('capitalize "hello"', () => {
    expect(ftt.capitalize(strings.helloString)).toMatch(/Hello/);
  });
  it('capitalize my name', () => {
    expect(ftt.capitalize(strings.myName)).toMatch(/Jehu/);
  });
  it('capitalize a small sentence', () => {
    expect(ftt.capitalize(strings.smallSentence)).toBe('Hello my name is Jehu');
  });
});

describe('Testing reverseString() function', () => {
  it('reverse "hello"', () => {
    expect(ftt.reverseString(strings.helloString)).toBe('olleh');
  });
  it('reverse my name', () => {
    expect(ftt.reverseString(strings.myName)).toMatch(/uhej/);
  });
  it('reverse a small sentence', () => {
    expect(ftt.reverseString(strings.smallSentence)).toBe('uheJ si eman ym olleh');
  });
});

describe('Testing calculator object', () => {
  it('two plus two', () => {
    expect(ftt.calculator.add(2, 2)).toEqual(4);
  });
  it('two times three', () => {
    expect(ftt.calculator.multiply(2, 3)).toEqual(6);
  });
  it('ten minus eight', () => {
    expect(ftt.calculator.subtract(10, 8)).toEqual(2);
  });
  it('ten divided by two', () => {
    expect(ftt.calculator.divide(10, 2)).toEqual(5);
  });
});

describe('Testing caesarCipher() function', () => {
  it('caesar cipher "xyz" shifted by 3', () => {
    expect(ftt.caesarCipher(strings.randomString, 3)).toBe('abc');
  });
  it('caesar cipher "HeLLo" shifted by 3', () => {
    expect(ftt.caesarCipher(strings.HeLLoString, 3)).toBe('KhOOr');
  });
  it('caesar cipher "Hello, World!" shifted by 3', () => {
    expect(ftt.caesarCipher(strings.HelloWorldString, 3)).toBe('Khoor, Zruog!');
  });
});

describe('Testing analyzeArray() function', () => {
  it('analyze sorted array', () => {
    expect(ftt.analyzeArray(arrays.sorted)).toEqual({average: 5, min: 1, max: 9, length: 9})
  });
  it('analyze sorted array', () => {
    expect(ftt.analyzeArray(arrays.unsorted)).toEqual({average: 5, min: 1, max: 9, length: 9})
  })
})