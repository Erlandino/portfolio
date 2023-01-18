import { useEffect, useState } from "react";

export default function WeatherApi() {
  const [weatherData, setWeatherData] = useState();
  function weatherApiCall() {
    navigator.geolocation.getCurrentPosition((position) => {
      apiCall(position);
    });
  }
  async function apiCall(position) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=6e6bd173d56ea0e081dc03fc608de461`
    );
    const data = await res.json();
    console.log(data);
    setWeatherData((prevData) => data);
  }

  useEffect(() => {
    weatherApiCall();
  }, []);

  const iconUrl = weatherData
    ? `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`
    : "";

  return (
    <div className="weatherApi">
      <div className="weatherApi__iconTempContainer">
        {iconUrl && <img className="weatherApi__iconTempContainer__icon" src={iconUrl} alt="" />}
        {weatherData && (
          <p className="weatherApi__iconTempContainer__temp">
            {Math.round(weatherData.main.temp)}º
          </p>
        )}
      </div>
      {weatherData && <p className="weatherApi__city">{weatherData.name}</p>}
    </div>
  );
}
