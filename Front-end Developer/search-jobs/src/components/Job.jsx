import useIcon from "../hooks"
import { Link } from 'react-router-dom'

const Job = ({ job }) => {
  const PublicIcon = useIcon("Public")
  const AccessTimeIcon = useIcon("AccessTime")
  let jobDate = new Date(job.date)
  const today = new Date()
  jobDate = Math.abs(today - jobDate);
  jobDate = Math.ceil(jobDate / (1000 * 60 * 60 * 24)); 
  return (
    <Link to={`/jobs/${job.id}`}>
      <div className="bg-white my-8 p-1 sm:p-3 shadow">
          <div className="flex">
            <div className="h-20 w-20 sm:h-24 sm:w-24 mr-4"><img className="h-full w-full rounded" src={job.logo} alt="" /></div>
            <div className="w-full">
              <div className="font-bold text-xs text-blue-900">{job.name}</div>
              <div className="sm:pt-2 pb-1 sm:pb-3 sm:text-lg">{job.title}</div>
              <div className="">
                <span>
                  {job.fulltime === "true" ? 
                  <span className="text-xs font-bold py-[2px] sm:py-1 px-[3px] sm:px-[6px] border-2 border-solid border-blue-900 rounded text-blue-900">Full Time</span> : <></>}
                </span>
                <div className="flex sm:float-right pt-2">
                  <div className="text-xs text-gray-400">
                    <PublicIcon /> 
                    <span className="pl-2">{job.city}</span>
                  </div>
                  <div className="text-xs text-gray-400 pl-5">
                    <AccessTimeIcon />
                    <span className="pl-2">{jobDate} days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Link>
  )
}

export default Job