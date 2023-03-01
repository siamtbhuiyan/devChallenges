import Search from "./Search"
import Filter from "./Filter"
import JobsList from "./JobsList"

const Home = ({ jobs, page, totalPages, changePage, toggleFullTime }) => {
    
  return (
    <div className="container mx-auto font-poppins">
        <div className="font-bold text-2xl my-8">Search Jobs</div>
        <Search />
        <div className="flex">
            <Filter toggleFullTime={toggleFullTime}/>
            <JobsList jobs={jobs} page={page} totalPages={totalPages} changePage={changePage} />
        </div>
    </div>
  )
}

export default Home