let API_KEY = "d6a15936ae1a3c93173bf4c27f1920c6";
getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`
    const weatherPromise = fetch(FULL_URL);
    return weatherPromise.then((result) => {
        return result.json();
    })
}
//console.log(getWeatherData("London"));

searchCity = () => {
    const city = document.getElementById('city-input').value;
    getWeatherData(city)
        .then((result) => {
        console.log(result);
        showWeatherData(result);
        }).catch((error) => {
          console.log(error);
        })
}
showWeatherData = (weatherdata) => {
    document.getElementById('city-name').innerText = weatherdata.name;
    document.getElementById('weather-type').innerText=weatherdata.weather[0].main;
    document.getElementById('temp').innerText=weatherdata.main.temp;
    document.getElementById('min-temp').innerText=weatherdata.main.temp_min;
    document.getElementById('max-temp').innerText=weatherdata.main.temp_max;
}