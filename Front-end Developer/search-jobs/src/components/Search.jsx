import backgroundImg from "../assets/backgroundImg.png"

const Search = () => {
  return (
    <div style={{ "backgroundImage": `url(${backgroundImg})` }} className="h-36 w-full rounded-lg flex justify-center items-center">
        <div className="bg-white p-1 rounded w-[70%] flex">
            <input type="text" placeholder="Search Jobs" className="py-4 px-5 rounded flex-[4]"/>
            <button className="py-4 px-5 bg-blue-500 text-white rounded flex-1">Search</button>
        </div>
    </div>
  )
}

export default Search