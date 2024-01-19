// Select img element for cat image
const img = document.querySelector('img');

// Promise of getting a cat image from GIPHY
async function getCatsPromise() {

    // Fetch cat GIPH data from the website, then assign that data to a variable
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=NetagrbBzo5BdC3fcYAZbfgyHMEbXGOc&s=cats', {mode: 'cors'});
    
    // Format cat GIPH data into JSON, then assign that formatted data to a variable
    const catData = await response.json();

    // DOM - display cat GIPH on the webpage
    img.src = catData.data.images.original.url;
}
getCatsPromise();

/* OLD promise notation
// Promise of getting a cat image from GIPHY
fetch('https://api.giphy.com/v1/gifs/translate?api_key=NetagrbBzo5BdC3fcYAZbfgyHMEbXGOc&s=cats', {mode: 'cors'})
    .then(function(response) {
        // Successful response
        return response.json();
    })

    // Display cat image from GIPHY
    .then(function(response) {
        console.log(response);
        img.src = response.data.images.original.url;
    })

    // Log to console if an error
    .catch(function(err) {
        // Error :(
        console.log('Error: ' + err);
    });
*/

// Select div containers for different parts of the weather data and search box
const city = document.querySelector('#city');
const temperature = document.querySelector('#temperature');
const windSpeed = document.querySelector('#wind-speed');
const windDirection = document.querySelector('#wind-direction');
const precipitation = document.querySelector('#precipitation');
const cityInputBox = document.querySelector('#input-box-city');
const clickSubmit = document.querySelector('#submit');



// Promise of getting weather data from Milwaukee
async function getWeatherPromise() {

    // Fetch weather data from website, then assign that data to a variable
    const weatherResponse = await fetch('https://api.weatherapi.com/v1/current.json?key=4b877b769355464b816210331231212&q=milwaukee', {mode: 'cors'})
    
    // Format weather data into JSON, then assigne that data to a variable
    const weatherData = await weatherResponse.json();

    // DOM - Display weather data on webpage
    city.textContent = 'City: ' + weatherData.location.name;
    temperature.textContent = 'Temperature: ' + weatherData.current.temp_f + ' degrees F';
    windSpeed.textContent = 'Wind Speed: ' + weatherData.current.wind_mph;
    windDirection.textContent = 'Wind Direction: ' + weatherData.current.wind_degree + ' degrees ' + weatherData.current.wind_dir;
    precipitation.textContent = 'Condition: ' + weatherData.current.condition.text;
}
getWeatherPromise();

/*  OLD promise notation
// Promise of getting weather data from Milwaukee
fetch('https://api.weatherapi.com/v1/current.json?key=4b877b769355464b816210331231212&q=milwaukee', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })

    .then(function(response) {
        console.log(response);
        
        // DOM - displays all of the weather data
        city.textContent = 'City: ' + response.location.name;
        temperature.textContent = 'Temperature: ' + response.current.temp_f + ' degrees F';
        windSpeed.textContent = 'Wind Speed: ' + response.current.wind_mph;
        windDirection.textContent = 'Wind Direction: ' + response.current.wind_degree + ' degrees ' + response.current.wind_dir;
        precipitation.textContent = 'Condition: ' + response.current.condition.text;
    })

    // Record error if weather data is not fetched properly
    .catch(function(err) {
        console.log('Did not get the weather data: ' + err);
    });
*/
