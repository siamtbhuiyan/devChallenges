import useIcon from "../hooks"

const Filter = ({ toggleFullTime }) => {
  const PublicIcon = useIcon("Public")
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
                <input className="p-4 focus:outline-none" type="text" placeholder="City, State, Country" />
            </div>
        </div>
    </div>
  )
}

export default Filter