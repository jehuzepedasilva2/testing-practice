function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
  return string.split("").reverse().join("");
} 

const calculator = {
  add(x, y) {
    return x + y;
  },
  subtract(x, y) {
    return x - y;
  },
  multiply(x, y) {
    return x * y;
  },
  divide(x, y) {
    return x / y;
  }
}

function caesarCipher(string, shift) {
  const newString = [];
  
  shift = ((shift % 26) + 26) % 26;

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (/[a-zA-Z]/.test(char)) {
      const isUpperCase = char === char.toUpperCase();
      const baseCharCode = isUpperCase ? 65 : 97; // ASCII codes for 'A' and 'a'
            const newChar = String.fromCharCode(
        ((char.charCodeAt(0) - baseCharCode + shift) % 26) + baseCharCode
      );
      newString.push(newChar);
    } else {
      newString.push(char);
    }
  }

  return newString.join('');
}


function analyzeArray(array) {
  let max = array[0], min = array[0], sum = 0, length = 0;
  array.forEach(val => {
    max = Math.max(max, val);
    min = Math.min(min, val);
    sum += val;
    length++;
  });
  const average = sum / length;
  return { average, min, max, length };
}

module.exports = {
  capitalize, 
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};