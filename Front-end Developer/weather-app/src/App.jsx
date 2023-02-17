import { useState, useEffect }from "react";
import weatherService from "./services/weather";
import CurrentWeather from "./components/CurrentWeather";

const App = () => {

  const [weather, setWeather] = useState(null)
  useEffect(() => {
    const getWeather = async () => {
      weatherService.getCurrent().then(weather =>
        setWeather(weather)
      )
    }
    getWeather()
  }, [])
  if (weather !== null) {
    let date = new Date(weather.dt * 1000);
    date = date.toDateString().slice(0, -5)
    date = date.slice(0, 3) + "," + date.slice(3)
    const currentData = {
      cel: Math.round(weather.main.temp - 273.15),
      date: date,
      icon: weather.weather[0].icon,
      condition: weather.weather[0].main
    }
    
    return (
      <div className="screen">
        <CurrentWeather currentData={currentData} />
        <div className="right"></div>
      </div>
    );
  }
};

export default App;
