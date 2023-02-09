import React, { useState } from 'react'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Blog from './components/Blog'

const App = () => {
  const [projects, setProjects] = useState("React");
  
  const handleChange = () => {
    console.log(projects);
    setProjects("VUE");
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
              <Projects handleClick={handleChange} />
              <Blog />
            </div>
          </div>
      </div>
    </div>
  )
}

export default App