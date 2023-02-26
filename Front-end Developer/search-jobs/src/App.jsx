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


  const getJobs = async () => {
    await jobService.getJobs().then(jobs => 
      setJobs(jobs)  
    )
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/jobs" element={<Jobs />}/>
      </Routes>
    </Router>
    
  )
}

export default App