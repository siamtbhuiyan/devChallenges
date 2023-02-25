import jobService from "./services/jobs";
import { useState, useEffect } from "react";

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

  console.log(jobs)

  return (
    <div className="font-bold text-4xl">Search Jobs</div>
  )
}

export default App