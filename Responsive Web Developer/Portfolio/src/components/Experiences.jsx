import React from 'react'

const Experiences = () => {
  return (
    <div className='experiences'>
      <div className='font-medium text-2xl text-gray- pb-5'>Experiences</div>
      <div className='flex'>
      <div className="experience">
        <div className="e-logo pt-2"><img className='w-4/5 mx-auto' src="images/adidas.png" alt="" /></div>
        <div className="e-details">
          <div className='font-medium text-gray-500 text-sm pb-2'>Feb 2018 - Current</div>
          <div className='font-semibold text-gray-800'>Front-end developer</div>
          <div className='font-medium text-gray-500 pt-6'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada</div>
        </div>
      </div>
      <div className="experience">
        <div className="e-logo pt-4"><img className='w-3/5 mx-auto' src="images/hm.png" alt="" /></div>
        <div className="e-details">
          <div className='font-medium text-gray-500 text-sm pb-2'>August 2016 - Feb 2018</div>
          <div className='font-semibold text-gray-800'>Full-stack developer</div>
          <div className='font-medium text-gray-500 pt-6'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada</div>
        </div>
      </div>
      <div className="experience">
        <div className="e-logo pt-4"><img className='w-4/6 mx-auto' src="images/nivea.png" alt="" /></div>
        <div className="e-details">
          <div className='font-medium text-gray-500 text-sm pb-2'>June 2015 - August 2016</div>
          <div className='font-semibold text-gray-800'>Junior Front-end developer</div>
          <div className='font-medium text-gray-500 pt-6'>Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada</div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Experiences