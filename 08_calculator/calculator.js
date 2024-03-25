const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => 
    total + current, 0);  
};

const multiply = function(array) {
  return array.reduce((total, current) => 
   total * current);
};

const power = function(a, b) {
  let product = a;
	while (b > 1) {
    product *= a;
    b--;
  }
  return product;
};

const factorial = function(a) {
	let product = 1;
  while (a > 1) {
    product *= (a--)
  }
  return product
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
