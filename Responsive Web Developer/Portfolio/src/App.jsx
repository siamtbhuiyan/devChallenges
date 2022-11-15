import React from 'react'

const App = () => {
  return (
    <div className="h-screen w-screen background p-6 font-montserrat">
      <div className='container mx-auto grid grid-cols-5'>
          <div className="profile">
            PROFILE
          </div>
          <div className='skills'>
            SKILLS
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit laudantium sequi commodi, eius cupiditate atque voluptate illum est voluptates quaerat ea officia, accusantium repellat possimus consequatur! Veritatis molestiae accusantium quidem?
          </div>
          <div className='blog'>
            blog
          </div>
          <div className='hobbies'>
            hobbies
          </div>
          <div className='learning'>
            learning
          </div>
          <div className='projects'>
            projects
          </div>
      </div>
    </div>
  )
}

export default App