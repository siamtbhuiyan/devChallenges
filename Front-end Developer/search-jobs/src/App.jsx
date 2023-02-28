import jobService from "./services/jobs";
import { useState, useEffect } from "react";
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


  const getAll = async () => {
    await jobService.getAll().then((jobs) => {
      const currentJobs = jobs.map((j, index) => {
        return {
          ...j,
          page: Math.ceil((index + 1)/5)
        }
      })
      setJobs(currentJobs)  
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
    console.log(jobs)
  return (
      <div className="">
        <Router>
        <Routes>
          <Route path="/" element={<Home jobs={jobs} page={currentPage} />}/>
          <Route path="/jobs" element={<Jobs />}/>
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App