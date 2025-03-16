//converting Farenheit to celcius
function fahrenheitToCelsius(fahrenheit: number): number {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
  let fahrenheit = 85;
  let celsius = fahrenheitToCelsius(fahrenheit);
  console.log(`${fahrenheit}F is ${celsius.toFixed(2)}C`); //expected output is 29.44C