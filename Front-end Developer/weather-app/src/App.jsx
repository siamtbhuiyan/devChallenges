import { useState, useEffect }from "react";
import weatherService from "./services/weather";
import useIcon from "./hooks";

const App = () => {
  const MyLocationIcon = useIcon("MyLocation")
  const CloseIcon = useIcon("Close")
  const LocationOn = useIcon("LocationOn")
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
    const cel = Math.round(weather.main.temp - 273.15)
    let date = new Date(weather.dt * 1000);
    date = date.toDateString().slice(0, -5)
    date = date.slice(0, 3) + "," + date.slice(3)

    return (
      <div className="screen">
        <div className="left">
          <div className="navbar">
            <button className="btn">Search for places</button>
            <span className="location"><MyLocationIcon /></span>
          </div>
          <div className="current">
            <div className="icon">
              <img className="h-full w-full" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}></img>
            </div>
            <div>{`${cel}\u00B0C`}</div>
            <div>{weather.weather[0].main}</div>
            <div>{`Today ${date}`}</div>
            <div><LocationOn /> Dhaka</div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    );
  }
};

export default App;
