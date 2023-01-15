import React from 'react'

const Skills = () => {
  return (
    <div className='skills'>
        <div className='uppercase text-gray-800 font-bold text-lg'>front end</div>
          <div className="bars">
              <div class="bg-light relative h-[10px] w-full rounded-2xl">
                <div
                  class="bg-primary absolute top-0 left-0 h-full w-1/2 rounded-2xl"
                ></div>
              </div>
            <div>
              CSS
              <div class="bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div class="bg-blue-600 h-2 rounded-full w-6/12"></div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Skills