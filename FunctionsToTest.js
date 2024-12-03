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

module.exports = {
  capitalize, 
  reverseString,
  calculator,
};