import React from 'react'

const Skills = () => {
  return (
    <div className='skills'>
        <div className='uppercase text-gray-800 font-bold text-lg pb-2'>front end</div>
          <div className="bars">
            <div className='bar'>
              <div className='flex-1 text-[#4F4F4F]'>React</div>
              <div class="flex-[3] bg-gray-200 rounded-full h-2 dark:bg-gray-700 my-auto">
                <div class="bg-blue-600 h-2 rounded-full w-2/3"></div>
              </div>
            </div>
            <div className='bar'>
              <div className='flex-1 text-[#4F4F4F]'>Javascript</div>
              <div class="flex-[3] bg-gray-200 rounded-full h-2 dark:bg-gray-700 my-auto">
                <div class="bg-blue-600 h-2 rounded-full w-9/12"></div>
              </div>
            </div>
            <div className='bar'>
              <div className='flex-1 text-[#4F4F4F]'>CSS</div>
              <div class="flex-[3] bg-gray-200 rounded-full h-2 dark:bg-gray-700 my-auto">
                <div class="bg-blue-600 h-2 rounded-full w-11/12"></div>
              </div>
            </div>
            <div className='bar'>
              <div className='flex-1 text-[#4F4F4F]'>Vue</div>
              <div class="flex-[3] bg-gray-200 rounded-full h-2 dark:bg-gray-700 my-auto">
                <div class="bg-blue-600 h-2 rounded-full w-2/3"></div>
              </div>
            </div>
            <div className='bar'>
              <div className='flex-1 text-[#4F4F4F]'>Redux</div>
              <div class="flex-[3] bg-gray-200 rounded-full h-2 dark:bg-gray-700 my-auto">
                <div class="bg-blue-600 h-2 rounded-full w-9/12"></div>
              </div>
            </div>
            <div className='bar'>
              <div className='flex-1 text-[#4F4F4F]'>React Native</div>
              <div class="flex-[3] bg-gray-200 rounded-full h-2 dark:bg-gray-700 my-auto">
                <div class="bg-blue-600 h-2 rounded-full w-11/12"></div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Skills