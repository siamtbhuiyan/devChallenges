import { useState, useEffect }from "react";
import weatherService from "./services/weather";

const App = () => {
  const [weather, setWeather] = useState({})
  useEffect(() => {
    weatherService.getAll().then(weather =>
      setWeather(weather)
    )
    console.log(weather)
  }, [])
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello World!</h1>
      <h2>{import.meta.env.VITE_API_KEY}</h2>
    </div>
  );
};

export default App;
