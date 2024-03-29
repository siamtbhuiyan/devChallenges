const ProjectsToggle = ({ handleClick, project }) => {
    return (
        <div className='projectsToggle'>
            <div className='font-medium text-gray-800 xs:text-lg'>Projects (3)</div>
            <div className='buttons mt-4'>
            <button className={`btn ${project === "React" ? "active" : ""}`} onClick={() => handleClick("React")}>React</button>
            <button className={`btn ${project === "Vue" ? "active" : ""}`} onClick={() => handleClick("Vue")}>Vue</button>
            <button className={`btn ${project === "Responsive" ? "active" : ""}`} onClick={() => handleClick("Responsive")}>Responsive</button>
            </div>
        </div>
    )
};

export default ProjectsToggle