//convert farenheit to celcius
function farenheitToCelcius(farenheit) {
    let celcius = (farenheit - 32) * 5 / 9;
    return celcius;
}

let farenheit = 85;
let celcius = farenheitToCelcius(farenheit);
console.log(farenheit + "°F is" + celcius.toFixed(2) + "°C"); //output 85°F is 29.44°C