import useIcon from "../hooks"

const CurrentWeather = ({ currentData, handleToggle, isFahrenheit }) => {
    const MyLocationIcon = useIcon("MyLocation")
    const LocationOn = useIcon("LocationOn")
    return (
        <div className="left">
            <div className="navbar">
            <button className="btn" onClick={() => handleToggle()}>Search for places</button>
            <span className="location"><MyLocationIcon /></span>
            </div>
            <div className="current">
            <div className="icon">
                <img className="h-full w-full" src={`http://openweathermap.org/img/wn/${currentData.icon}@4x.png`}></img>
            </div>
            <div className="text-5xl py-12 font-medium"><span className="text-[100px]">{isFahrenheit ? currentData.far : currentData.cel}</span>{isFahrenheit ? `\u00B0F` : `\u00B0C`}</div>
            <div className="text-gray-500 font-semibold text-4xl pb-16">{currentData.condition}</div>
            <div className="text-gray-500 font-medium text-lg"><span className="pr-4">Today</span> {`${currentData.date}`}</div>
            <div className="pt-8 text-lg font-semibold text-gray-500"><LocationOn /> {currentData.city}</div>
            </div>
        </div>
    )
}

export default CurrentWeather