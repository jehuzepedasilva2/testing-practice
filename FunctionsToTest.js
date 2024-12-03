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
  const lower = string.toLowerCase();
  const alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  ]
  const newString = [];
  const hasPunctuation = /[.,;:'"!?()-\s]{1,}/;
  for (let i = 0; i < lower.length; i++) {
    let curr;
    if (hasPunctuation.test(lower.charAt(i))) {
      curr = lower.charAt(i);
    } else {
      const index = (lower.charAt(i).charCodeAt(0) - 97 + shift) % 26;
      curr = alphabet[index];
      if (string.charAt(i) === string.charAt(i).toUpperCase()) {
        curr = curr.toUpperCase()
      }
    }
    newString.push(curr);
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