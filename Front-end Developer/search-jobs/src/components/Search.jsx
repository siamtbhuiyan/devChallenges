import backgroundImg from "../assets/backgroundImg.png"
import useIcon from "../hooks"

const Search = ({ searchJobs, inputRef }) => {
    const WorkOutlineIcon = useIcon("WorkOutline")
  return (
    <div style={{ "backgroundImage": `url(${backgroundImg})` }} className="h-36 w-full rounded-lg flex justify-center items-center">
        <div className="bg-white p-1 rounded w-[70%] flex">
            <WorkOutlineIcon className="text-gray-400 my-auto ml-4"/>
            <input type="text" ref={inputRef} placeholder="Search Jobs" className="py-4 px-2 rounded flex-[4] focus:outline-none"/>
            <button onClick={() => searchJobs(inputRef.current.value)} className="py-4 px-5 bg-blue-500 text-white rounded flex-1 hover:bg-blue-600">Search</button>
        </div>
    </div>
  )
}

export default Search