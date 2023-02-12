import React, { useState } from 'react'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Experiences from './components/Experiences'
import ProjectsToggle from './components/ProjectsToggle'
import Projects from './components/Projects'

const App = () => {
  const [projects, setProjects] = useState("React");
  
  const handleChange = (currentProject) => {
    setProjects(currentProject);
  };

  return (
    <div className="w-screen background p-6 font-montserrat">
      <div className='container mx-auto'>
          <Profile />
          <div className="lg:grid lg:grid-cols-3">
            <div className="left">
              <Skills />
              <Hobbies />
            </div>
            <div className="right">
              <Experiences /> 
              <ProjectsToggle handleClick={handleChange} project={projects}/>
              <Projects project={projects}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App