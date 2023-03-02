import Search from "./Search"
import Filter from "./Filter"
import JobsList from "./JobsList"

const Home = ({ jobs, page, totalPages, changePage, toggleFullTime, searchJobs, inputRef, filterCity, cityRef, searchCity, topCities, currentCity }) => {
    
  return (
    <div className="main">
        <div className="font-bold text-2xl my-8">Search Jobs</div>
        <Search searchJobs={searchJobs} inputRef={inputRef} />
        <div className="flex flex-col sm:flex-row">
            <Filter toggleFullTime={toggleFullTime}  filterCity={filterCity} cityRef={cityRef} searchCity={searchCity} topCities={topCities} currentCity={currentCity} />
            <JobsList jobs={jobs} page={page} totalPages={totalPages} changePage={changePage} currentCity={currentCity} />
        </div>
    </div>
  )
}

export default Home