const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => {
  if (y === 0) { return "Cannot divide by 0"; }
  return x * 1.0 / y;
}

module.exports = { add, subtract, multiply, divide };
