/**
 * Weather App
 * DONE: Complete getWeatherData() to return json response Promise
 * DONE: Complete searchCity() to get user input and get data using getWeatherData() 
 * DONE: Complete showWeatherData() to set the data in the html file from response 
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
//api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weatherq?jaipur&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  const weatherPromise = fetch(FULL_URL);
  return weatherPromise.then((response)=>{
    return response.json();
    // console.log(response);
  }).catch((error)=>{
    console.log(error);
  })
}

console.log(getWeatherData('Detroit'));
// getWeatherData('Detroit');

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  const city = document.getElementById('city-input').value;
  // code goes here
  getWeatherData(city)
  .then((response)=>{
    showWeatherData(response);
    console.log(response);
  }).catch((error)=>{
    console.log(error);
  })
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
 //Code goes here
 document.getElementById('city-name').innerText = weatherData.name;
 document.getElementById('weather-type').innerText = weatherData.weather[0].main;
 document.getElementById('temp').innerText = weatherData.main.temp;
 document.getElementById('min-temp').innerText = weatherData.main.temp_min;
 document.getElementById('max-temp').innerText = weatherData.main.temp_max;

}

