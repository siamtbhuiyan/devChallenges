const Projects = ({ changeView }) => {
  return (
    <div className='projects'>
        <div className='font-medium text-gray-800 text-lg'>Projects (3)</div>
        <div className='buttons mt-4'>
          <button className='btn' onClick={changeView}>React</button>
          <button className='btn' onClick={changeView}>Vue</button>
          <button className='btn' onClick={changeView}>Responsive</button>
        </div>
    </div>
  )
}

export default Projects