import Job from "./Job"

const JobsList = ({ jobs, page, totalPages, changePage }) => {
  const pages = []
  for (let i = 1; i < totalPages + 1; i++) {
    pages.push(i)
  }

  return (
    <div className="flex-[7] py-2 md:pl-8">
        {jobs.map((j) => j.page === page ?
            <Job job={j} /> : <></>
        )}
        <div className="text-center sm:float-right pb-8">
          <button disabled={page === 1 ? true : false} onClick={() => changePage(page - 1)} className="pageBtn">{"<"}</button>
          {pages.map((i) => <button onClick={() => changePage(i)} className={page === i ? "pageBtn activeBtn" : "pageBtn"}>{i}</button>)}
          <button disabled={page === totalPages ? true : false} onClick={() => changePage(page + 1)} className="pageBtn">{">"}</button>
        </div>
    </div>
  )
}

export default JobsList