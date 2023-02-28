import Job from "./Job"

const JobsList = ({ jobs }) => {
  return (
    <div className="flex-[7] py-2 pl-8">
        {jobs.map((j) => 
            <Job job={j} />
        )}
    </div>
  )
}

export default JobsList