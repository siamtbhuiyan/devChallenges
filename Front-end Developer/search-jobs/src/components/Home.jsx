import Search from "./Search"
import Filter from "./Filter"

const Home = ({ jobs }) => {
    
  return (
    <div className="container mx-auto font-poppins">
        <div className="font-bold text-2xl my-8">Search Jobs</div>
        <Search />
        <div className="flex">
            <Filter />
            <div className="flex-[7]"></div>
        </div>
    </div>
  )
}

export default Home