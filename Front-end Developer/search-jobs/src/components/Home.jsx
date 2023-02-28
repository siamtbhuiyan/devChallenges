import Search from "./Search"
import Filter from "./Filter"
import JobsList from "./JobsList"

const Home = ({ jobs, page }) => {
    
  return (
    <div className="container mx-auto font-poppins">
        <div className="font-bold text-2xl my-8">Search Jobs</div>
        <Search />
        <div className="flex">
            <Filter />
            <JobsList jobs={jobs} page={page} />
        </div>
    </div>
  )
}

export default Home