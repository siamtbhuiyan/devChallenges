import React, { useState } from 'react'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Experiences from './components/Experiences'
import Blog from './components/Blog'
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
          <div className="grid grid-cols-3">
            <div className="left">
              <Skills />
              <Hobbies />
              <Experiences />
            </div>
            <div className="right">
              <Projects handleClick={handleChange} project={projects}/>
              {/* <Projects handleClick={handleClick} /> */}
              <Blog />
            </div>
          </div>
      </div>
    </div>
  )
}

export default App