import useIcon from "../hooks"

const Filter = ({ toggleFullTime, filterCity, cityRef, searchCity, topCities, currentCity }) => {
  const PublicIcon = useIcon("Public")

  return (
    <div className="flex-[3]">
        <div className="text-sm pt-11 pb-8 sm:px-4">
            <input type="checkbox" name="full-time" id="full-time" className="h-5 w-5" onClick={() => toggleFullTime()} />
            <label htmlFor="full-time" className="pl-3 align-top font-medium">Full Time</label>
        </div>
        <div className="">
            <div className="uppercase text-sm font-bold text-gray-400 pb-4">Location</div>
            <div className="bg-white md:text-sm text-xs rounded shadow">
                <PublicIcon className="text-gray-400 ml-2 md:ml-4" />
                <input onChange={() => searchCity(cityRef.current.value)} ref={cityRef} className="py-4 lg:px-4 px-2 focus:outline-none" type="text" placeholder="City, Country" />
            </div>
            <form className="px-3 py-5">
              {
                topCities.map(city => 
                  <div className="pb-2">
                    <input onClick={() => filterCity(city)} checked={currentCity.toLowerCase() === city.toLowerCase()} className="h-4 w-4 cursor-pointer" type="radio" id={city} name="city" value={city} />
                    <label className="text-sm pl-3 align-top cursor-pointer" for={city}>{city[0].toUpperCase() + city.slice(1)}</label>
                  </div>
                  )
              }
            </form>
        </div>
    </div>
  )
}

export default Filter