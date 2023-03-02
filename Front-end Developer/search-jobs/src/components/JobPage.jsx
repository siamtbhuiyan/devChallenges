import { useParams, Link } from "react-router-dom"
import useIcon from "../hooks"


const JobPage = ({ jobs }) => {
  const PublicIcon = useIcon("Public")
  const AccessTimeIcon = useIcon("AccessTime")
  const id = useParams().id
  const job = jobs.find(job => job.id === id)  
  let jobDate = new Date(job.date)
  const today = new Date()
  jobDate = Math.abs(today - jobDate);
  jobDate = Math.ceil(jobDate / (1000 * 60 * 60 * 24)); 
  return (
    <div className="container mx-auto my-8 font-poppins">
        <div className="font-bold text-2xl my-8">Search Jobs</div>
        <div className="flex">
          <div className="flex-1">
            <div className="text-blue-500 text-sm pb-9">
              <Link to="/"><span className="text-xl pr-2">&#8592;</span> Back to search</Link>
            </div>
            <div className="pb-4 text-sm font-bold uppercase text-gray-400">
              How To Apply
            </div>
            <div className="text-sm pr-10">
            Please email a copy of your resume and online portfolio to <span className="text-blue-500 cursor-pointer">{job.author}</span>
            </div>
          </div>
          <div className="flex-[4]">
            <div className="text-2xl font-bold">
              <span className="pr-6">
                {job.title}
              </span>
              {job.fulltime === "true"
                ? <span className="align-middle text-xs font-bold py-1 px-[6px] border-2 border-solid border-blue-900 rounded text-blue-900">Full Time</span>
                : <></>
              }
            </div>
            <div className="text-sm text-gray-400 pt-2">
              <AccessTimeIcon />
              <span className="pl-2">{jobDate} days ago</span>
            </div>
            <div className="py-9 flex">
              <div className="h-12 w-12 mr-3"><img className="h-full w-full rounded" src={job.logo} alt="" /></div>
              <div className="">
                <div className="text-lg font-bold">{job.name}</div>
                <div className="text-xs text-gray-400">
                <PublicIcon fontSize="small" /><span className="pl-2 align-middle">{job.city}</span></div>
              </div>
            </div>
            <div className="pb-5">Salary: {job.salary}</div>
            <div>{job.content}</div>
          </div>
        </div>
    </div>
  )
}

export default JobPage