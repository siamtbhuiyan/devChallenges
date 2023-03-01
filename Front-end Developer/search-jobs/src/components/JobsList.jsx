import Job from "./Job"

const JobsList = ({ jobs, page, totalPages }) => {
  const pages = []
  for (let i = 1; i < totalPages + 1; i++) {
    pages.push(i)
  }
  console.log(pages)
  return (
    <div className="flex-[7] py-2 pl-8">
        {jobs.map((j) => j.page === page ?
            <Job job={j} /> : <></>
        )}
        <div className="float-right pb-8">
          <button className="text-xs py-[10px] px-[14px] bg-white hover:bg-gray-100 rounded text-blue-500 mx-3 border border-blue-500">{"<"}</button>
          {pages.map((i) => <button className="text-xs py-3 px-4 bg-blue-500 hover:bg-blue-600 rounded text-white mx-3">{i}</button>)}
          <button className="text-xs py-[10px] px-[14px] bg-white hover:bg-gray-100 rounded text-blue-500 mx-3 border border-blue-500">{">"}</button>
        </div>
    </div>
  )
}

export default JobsList