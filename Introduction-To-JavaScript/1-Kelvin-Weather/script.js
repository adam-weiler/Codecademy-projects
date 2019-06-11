//The forecast for today in Kelvin.
// let forecastKelvin = 293;
let forecastKelvin = 0;
console.log(`The temperature is ${forecastKelvin} degrees Kelvin.`);

//The forecast for today converted to Celsius.
let forecastCelsius = forecastKelvin - 273;
console.log(`The temperature is ${forecastCelsius} degrees Celsius.`);

//The forecast for today converted to Fahrenheit.
let forecastFahrenheit = forecastCelsius * (9 / 5) + 32;
// console.log(`The temperature is ${forecastFahrenheit} degrees Fahrenheit.`);

//The Fahrenheit temperature rounded down.
forecastFahrenheit = Math.floor(forecastFahrenheit);
console.log(`The temperature is ${forecastFahrenheit} degrees Fahrenheit.`);

//The forecast for today converted to Newton.
forecastNewton = forecastCelsius * (33 / 100);
// console.log(`The temperature is ${forecastNewton} degrees Newton.`);

//The Newton temperature rounded down.
forecastNewton = Math.floor(forecastNewton);
console.log(`The temperature is ${forecastNewton} degrees Newton.`);
