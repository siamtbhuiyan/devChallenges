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


  const getAll = async () => {
    await jobService.getAll().then(jobs => 
      setJobs(jobs)  
    )
  }

  useEffect(() => {
    getAll()
  }, [])

  console.log(jobs)

  return (
    <div className="">
      <Router>
      <Routes>
        <Route path="/" element={<Home jobs={jobs} />}/>
        <Route path="/jobs" element={<Jobs />}/>
      </Routes>
    </Router>
    </div>
    
    
  )
}

export default App