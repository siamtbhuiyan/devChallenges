const WeatherForecast = ({ currentForecast }) => {
  return (
    <div className="pb-20">
        <div className="flex justify-end mx-24 my-10">
            <button className="degree-btn mr-3">{`\u00B0C`}</button>
            <button className="degree-btn">{`\u00B0F`}</button>
        </div>
        <div className="forecasts">
            {currentForecast.map((f, index) => <div key={index} className="forecast">
                <div className="text-center">{index === 0 ? "Tomorrow" : f.dt}</div>
                <div className=""><img className="h-full w-full" src={`http://openweathermap.org/img/wn/${f.icon}@4x.png`}></img></div>
                <div className="flex justify-between"><span>{`${f.maxC}\u00B0C`}</span><span className="text-gray-500">{`${f.minC}\u00B0C`}</span></div>
            </div>)}
        </div>
    </div>
  )
}

export default WeatherForecast