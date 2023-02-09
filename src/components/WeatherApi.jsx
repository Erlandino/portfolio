// Imports
import { useEffect, useState } from "react";

// Component
export default function WeatherApi() {
  // Weather data storage
  const [weatherData, setWeatherData] = useState();

  // Gets weather data from api call and stores it in weatherData state
  function weatherApiCall() {
    // Gathers coordinates of user and calls async function with the data
    navigator.geolocation.getCurrentPosition((position) => {
      apiCall(position);
    });
  }

  // Uses data of coordinates to call openweather api
  async function apiCall(position) {
    try {
      // Api call
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      // Throws error if there is an error with the api call
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      // Handles the data received from api call and stores it in weatherData state
      const data = await res.json();
      setWeatherData((prevData) => data);

      // Gives error message when there is an error
    } catch (error) {
      console.error(`Could not retrieve weather data: ${error}`);
    }
  }

  // UseEffect for api call, to prevent infinite api due to setWeatherData in apiCall function
  useEffect(() => {
    weatherApiCall();
  }, []);

  // Variable for weather icon, adds openweather icon image if weatherDate is true/contains data
  const iconUrl = weatherData
    ? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    : "";

  return (
    // Weather api container
    <div className="weatherApi">
      {/* Container for weather icon and temperature */}
      <div className="weatherApi__iconTempContainer">
        {/* Weather icon */}
        {iconUrl && <img className="weatherApi__iconTempContainer__icon" src={iconUrl} alt="" />}
        {/* Temperature */}
        {weatherData && (
          <p className="weatherApi__iconTempContainer__temp">
            {Math.round(weatherData.main.temp)}º
          </p>
        )}
      </div>
      {/* City weather data is taken from */}
      {weatherData && <p className="weatherApi__city">{weatherData.name}</p>}
    </div>
  );
}
