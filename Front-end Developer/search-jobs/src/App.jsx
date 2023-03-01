import jobService from "./services/jobs";
import { useState, useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Home from "./components/Home";
import Jobs from "./components/Jobs";

const App = () => {
  const [jobs, setJobs] = useState(null)
  const [cities, setCities] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isFullTime, setIsFullTime] = useState(false)
  const [allJobs, setAllJobs] = useState(null)

  const inputRef = useRef(null)


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
    await jobService.getCities().then(city => 
      setCities(city)  
    )
  }

  useEffect(() => {
    getAll()
    getCities()
  }, [])

  if (jobs !== null || cities !== null) {
    const changePage = (page) => {
      setCurrentPage(page)
    }

    const toggleFullTime = async () => {
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
      console.log(2, jobs)
      setTotalPages(Math.ceil(currentJobs.length/5))
      console.log(totalPages)
    }



  return (
      <div className="">
        <Router>
        <Routes>
          <Route path="/" element={<Home jobs={jobs} page={currentPage} totalPages={totalPages} changePage={changePage} toggleFullTime={toggleFullTime} searchJobs={searchJobs} inputRef={inputRef} />}/>
          <Route path="/jobs" element={<Jobs />}/>
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App