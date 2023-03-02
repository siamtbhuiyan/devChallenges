import { useParams } from "react-router-dom"

const JobPage = ({ jobs }) => {
  const id = useParams().id
  const job = jobs.find(job => job.id === id)  
  return (
    <div className="container mx-auto my-8 font-poppins">
        <div className="font-bold text-2xl my-8">Search Jobs</div>
        <div>{job.title}</div>
    </div>
  )
}

export default JobPage