import jobService from "./services/jobs";
import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes, Route, useMatch
} from 'react-router-dom'
import Home from "./components/Home";
import JobPage from "./components/JobPage";

const App = () => {
  const [jobs, setJobs] = useState(null)
  const [cities, setCities] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isFullTime, setIsFullTime] = useState(false)
  const [allJobs, setAllJobs] = useState(null)
  const [displayCity, setDisplayCity] = useState([])
  const [currentCity, setCurrentCity] = useState("")

  const inputRef = useRef(null)
  const cityRef = useRef(null)

  const getAll = async () => {
    await jobService.getAll().then((jobs) => {
      const currentJobs = jobs.map((j, index) => {
        return {
          ...j,
          page: Math.ceil((index + 1)/5)
        }
      })
      setAllJobs(currentJobs)
      setJobs(currentJobs)  
      setTotalPages(Math.ceil(jobs.length/5))
    }
    )
  }

  const getCities = async () => {
    await jobService.getCities().then(city => {
      setCities(city)
      setDisplayCity(city.slice(1, 5))  
    }
    )
  }

  useEffect(() => {
    getAll()
    getCities()
  }, [])



  if (jobs !== null && cities !== null) {

    const changePage = (page) => {
      setCurrentCity("")
      setCurrentPage(page)
    }

    const toggleFullTime = async () => {
      setCurrentCity("")
      setCurrentPage(1)
      setIsFullTime(!isFullTime)
      if (isFullTime) {
        setJobs(allJobs)
        setTotalPages(Math.ceil(allJobs.length/5))
      } else {
        await jobService.getFullTime().then((jobs) => {
          const currentJobs = jobs.map((j, index) => {
            return {
              ...j,
              page: Math.ceil((index + 1)/5)
            }
          })
          setJobs(currentJobs)  
          setTotalPages(Math.ceil(currentJobs.length/5))
        }
        )
      } 
    }

    const searchJobs = async (searchField) => {
      setCurrentCity("")
      setCurrentPage(1)
      const filteredJobs = allJobs.filter(
        job => {
          return (
            job
            .title
            .toLowerCase()
            .includes(searchField.toLowerCase()) ||
            job
            .name
            .toLowerCase()
            .includes(searchField.toLowerCase())
          );
        }
      );
      const currentJobs = filteredJobs.map((j, index) => {
        return {
          ...j,
          page: Math.ceil((index + 1)/5)
        }
      })
      setJobs(currentJobs)
      setTotalPages(Math.ceil(currentJobs.length/5))
    }

    const filterCity = (currentCity) => {
      setCurrentCity(currentCity)
      setCurrentPage(1)
      const filteredJobs = allJobs.filter(
        job => {
          return (
            job
            .city
            .toLowerCase() === currentCity.toLowerCase()
          );
        }
      );
      const currentJobs = filteredJobs.map((j, index) => {
        return {
          ...j,
          page: Math.ceil((index + 1)/5)
        }
      })
      setJobs(currentJobs)
      setTotalPages(Math.ceil(currentJobs.length/5))
    }

    const searchCity = (search) => {
      setCurrentCity("")
      if (search === "") {
        setJobs(allJobs)
        setDisplayCity(cities.slice(1, 5))
        setTotalPages(Math.ceil(allJobs.length/5))
      } else {
        const topCities = cities.filter(
          city => {
            return (
              city.toLowerCase().includes(search.toLowerCase())
            )
        })
        setDisplayCity(topCities)
        setTotalPages(Math.ceil(allJobs.length/5))
      }
    }

  return (
      <div className="">
        <Router>
          <Routes>
            <Route path="/" element={<Home jobs={jobs} page={currentPage} totalPages={totalPages} changePage={changePage} toggleFullTime={toggleFullTime} searchJobs={searchJobs} inputRef={inputRef} filterCity={filterCity} cityRef={cityRef} searchCity={searchCity} topCities={displayCity} currentCity={currentCity} />}/>
            <Route path="/jobs/:id" element={<JobPage jobs={jobs} />}/>
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App