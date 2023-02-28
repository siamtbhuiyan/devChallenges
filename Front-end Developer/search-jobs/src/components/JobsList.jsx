import Job from "./Job"

const JobsList = ({ jobs, page }) => {
  return (
    <div className="flex-[7] py-2 pl-8">
        {jobs.map((j) => j.page === page ?
            <Job job={j} /> : <></>
        )}
    </div>
  )
}

export default JobsList