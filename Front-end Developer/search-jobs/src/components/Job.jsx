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
      <div className="bg-white my-8 p-3 shadow">
          <div className="flex">
            <div className="h-24 w-24 mr-4"><img className="h-full w-full rounded" src={job.logo} alt="" /></div>
            <div className="w-full">
              <div className="font-bold text-xs text-blue-900">{job.name}</div>
              <div className="pt-2 pb-3 text-lg">{job.title}</div>
              <div className="">
                <span>
                  {job.fulltime === "true" ? 
                  <span className="text-xs font-bold py-1 px-[6px] border-2 border-solid border-blue-900 rounded text-blue-900">Full Time</span> : <></>}
                </span>
                <div className="flex float-right">
                  <div className="text-xs text-gray-400">
                    <PublicIcon /> 
                    <span className="pl-2">{job.city}</span>
                  </div>
                  <div className="text-xs text-gray-400 pl-5">
                    <AccessTimeIcon />
                    <span>{jobDate} days ago</span>
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