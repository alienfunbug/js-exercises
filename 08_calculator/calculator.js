const add = function(a,b) {
  return a+b;
	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  return arr.reduce((sum,acc) => sum + acc,0);
};

const multiply = function(arr) {
  return arr.reduce((multiplier,acc)=> multiplier * acc,1);
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	let total = 1;
  for (let i = num; num > 0; num --){
    total *= num;
  }
  return total;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
