import { useState, useEffect, useRef }from "react";
import weatherService from "./services/weather";
import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";

const App = () => {

  const [weather, setWeather] = useState(null)
  const [currentLocation, setCurrentLocation] = useState("Dhaka")
  const [lat, setLat] = useState(23.7644025)
  const [lon, setLon] =  useState(90.389015)
  const [locations, setLocations] = useState(null)
  const [searchToggle, setSearchToggle] = useState(false)

  const inputRef = useRef(null)
  const getWeather = async () => {
    await weatherService.getCurrent(lat, lon).then(weather =>
      setWeather(weather)
    )
  }
  useEffect(() => {
    getWeather()
  }, [])
  if (weather !== null) {
    const getLocation = async (currentLocation) => {
      weatherService.getLatLon(currentLocation).then((latlon) => {
        latlon = latlon.filter((value, index, self) =>
          index === self.findIndex((t) => (
            t.name === value.name
          ))
        ),
        setLocations(latlon)
      }
      )
    }

    const handleToggle = () => {
      setSearchToggle(!searchToggle)
    }

    const handleLocationChange = async (selectedLocation, lat, lon) => {
      setWeather(null)
      setLat(lat)
      setLon(lon)
      await weatherService.getCurrent(lat, lon).then(weather =>
        setWeather(weather)
      )
      setCurrentLocation(selectedLocation)
      handleToggle()
    }

    console.log(weather)
    
    let date = new Date(weather.dt * 1000);
    date = date.toDateString().slice(0, -5)
    date = date.slice(0, 3) + "," + date.slice(3)
    const currentData = {
      cel: Math.round(weather.main.temp - 273.15),
      date: date,
      icon: weather.weather[0].icon,
      condition: weather.weather[0].main,
      city: currentLocation,
      id: weather.id
    }
    
    return (
      <div className="screen">
        {searchToggle ? <SearchSection getLocation={getLocation} inputRef={inputRef} locations={locations} handleLocationChange={handleLocationChange} handleToggle={handleToggle}/> : <CurrentWeather currentData={currentData} handleToggle={handleToggle}/>}
        <div className="right"></div>
      </div>
      
    );
  }
};

export default App;
