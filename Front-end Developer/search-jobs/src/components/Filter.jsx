import useIcon from "../hooks"

const Filter = ({ toggleFullTime, cities, filterCity, clearRadio }) => {
  const PublicIcon = useIcon("Public")
  const topCities = cities.slice(1, 5)
  return (
    <div className="flex-[3]">
        <div className="text-sm pt-11 pb-8 px-4">
            <input type="checkbox" name="full-time" id="full-time" className="h-5 w-5" onClick={() => toggleFullTime()} />
            <label htmlFor="full-time" className="pl-3 align-top font-medium">Full Time</label>
        </div>
        <div className="">
            <div className="uppercase text-sm font-bold text-gray-400 pb-4">Location</div>
            <div className="bg-white text-sm rounded shadow">
                <PublicIcon className="text-gray-400 ml-4" />
                <input className="p-4 focus:outline-none" type="text" placeholder="City, Country" />
            </div>
            <form className="px-3 py-5">
              {
                topCities.map(city => 
                  <div className="pb-2">
                    <input onClick={() => filterCity(city)} className="h-4 w-4 cursor-pointer" type="radio" id={city} name="city" value={city} />
                    <label className="text-sm pl-3 align-top cursor-pointer" for={city}>{city[0].toUpperCase() + city.slice(1)}</label>
                  </div>
                  )
              }
              <button className="mt-5 text-xs p-2 bg-blue-500 text-white hover:bg-blue-600 rounded" onClick={() => clearRadio()}>Clear Filter</button>
            </form>
        </div>
    </div>
  )
}

export default Filter