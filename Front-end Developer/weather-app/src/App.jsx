import { useState, useEffect, useRef }from "react";
import weatherService from "./services/weather";
import CurrentWeather from "./components/CurrentWeather";
import SearchSection from "./components/SearchSection";
import WeatherForecast from "./components/WeatherForecast";
import Highlights from "./components/Highlights";

const App = () => {

  const [weather, setWeather] = useState(null)
  const [currentLocation, setCurrentLocation] = useState("Dhaka")
  const [lat, setLat] = useState(23.7644025)
  const [lon, setLon] =  useState(90.389015)
  const [locations, setLocations] = useState(null)
  const [searchToggle, setSearchToggle] = useState(false)
  const [forecast, setForecast] = useState(null)

  const inputRef = useRef(null)
  const getWeather = async () => {
    await weatherService.getCurrent(lat, lon).then(weather =>
      setWeather(weather)
    )
  }
  
  const getForecast = async () => {
    await weatherService.getForcast(lat, lon).then((f) => { 
      f = f.list.map((f) => {
        return {...f, dt: new Date(f.dt*1000).toUTCString()}
      })
      f = f.filter((f) => {
        return f.dt[18] === "6"
      }
        ),
        setForecast(f)
      }
    )
  }

  useEffect(() => {
    getWeather()
    getForecast()
  }, [])

  if (weather !== null && forecast !== null) {
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
      await weatherService.getForcast(lat, lon).then((f) => { 
        f = f.list.map((f) => {
          return {...f, dt: new Date(f.dt*1000).toUTCString()}
        })
        f = f.filter((f) => {
          return f.dt[18] === "6"
        }
          ),
          setForecast(f)
        }
      )
      setCurrentLocation(selectedLocation)
      handleToggle()
    }
    
    let date = new Date(weather.dt * 1000);
    date = date.toUTCString().slice(0, -18)
    const currentData = {
      cel: Math.round(weather.main.temp - 273.15),
      date: date,
      icon: weather.weather[0].icon,
      condition: weather.weather[0].main,
      city: currentLocation,
      id: weather.id
    }

    const currentForecast = forecast.map((f) => {
      return {
        icon: f.weather[0].icon,
        dt: f.dt.slice(0, -18),
        minC: Math.round(f.main.temp_min - 273.15),
        minF: Math.round((f.main.temp_min - 273.15)* 9/5 + 32),
        maxC: Math.round(f.main.temp_max - 273.15),
        maxF: Math.round((f.main.temp_max - 273.15)* 9/5 + 32),
      }
    })

    const highlightsData = {
      wind: Math.round(weather.wind.speed / 0.44704),
      humidity: weather.main.humidity,
      visibility: Math.round(weather.visibility / 1609.344),
      air: weather.main.pressure
    }
    
    return (
      <div className="screen">
        {searchToggle ? <SearchSection getLocation={getLocation} inputRef={inputRef} locations={locations} handleLocationChange={handleLocationChange} handleToggle={handleToggle}/> : <CurrentWeather currentData={currentData} handleToggle={handleToggle}/>}
        <div className="right">
          <WeatherForecast currentForecast={currentForecast}/>
          <Highlights highlightsData={highlightsData} />
        </div>
      </div>
      
    );
  }
};

export default App;
