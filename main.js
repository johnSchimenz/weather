// Select img element for cat image
const img = document.querySelector('img');

// Promise of getting a cat image from GIPHY
async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=NetagrbBzo5BdC3fcYAZbfgyHMEbXGOc&s=cats', {mode: 'cors'});
    const catData = await response.json();
    img.src = catData.data.images.original.url;
}
getCats();

/*
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


// Select div containers for different parts of the weather data
const city = document.querySelector('#city');
const temperature = document.querySelector('#temperature');
const windSpeed = document.querySelector('#wind-speed');
const windDirection = document.querySelector('#wind-direction');
const precipitation = document.querySelector('#precipitation');

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
