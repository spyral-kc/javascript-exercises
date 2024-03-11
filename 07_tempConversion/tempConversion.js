const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5/9)
  let roundCel = Math.round(celsius * 10) / 10 
  return roundCel
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = celsius * (9/5) +32
  let roundFah = Math.round(fahrenheit * 10) / 10
  return roundFah
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
