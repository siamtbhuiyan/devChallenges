import React from 'react'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Learning from './components/Learning'
import Projects from './components/Projects'
import Blog from './components/Blog'

const App = () => {
  return (
    <div className="h-screen w-screen background p-6 font-montserrat">
      <div className='container mx-auto'>
          <Profile />
          <div className="grid grid-cols-3">
            <div className="left">
              <Skills />
              <Hobbies />
              <Learning />
            </div>
            <div className="right">
              <Projects />
              <Blog />
            </div>
          </div>
      </div>
    </div>
  )
}

export default App