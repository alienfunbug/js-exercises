const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32)/1.80;
  return parseFloat(tempC.toFixed(1));
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC*1.80) + 32;
  return parseFloat(tempF.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
