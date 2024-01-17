// Select img element for cat image
const img = document.querySelector('img');

// Fetch cat image from GIPHY
fetch('https://api.giphy.com/v1/gifs/translate?api_key=NetagrbBzo5BdC3fcYAZbfgyHMEbXGOc&s=cats', {mode: 'cors'})
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });

/*
// Fetching weather data from Milwaukee
fetch('https://api.weatherapi.com/v1/current.json?key=4b877b769355464b816210331231212&q=milwaukee', {mode: 'cors'})
  .then(function(response) {
    console.log('Got weather data');
})
  .catch(function(err) {
    console.log('Did not get the weather data');
  });
  */