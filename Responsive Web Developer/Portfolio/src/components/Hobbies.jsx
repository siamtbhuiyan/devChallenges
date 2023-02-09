import React from 'react'

const Hobbies = () => {
  return (
    <div className='hobbies'>
        <div className='font-medium text-2xl text-gray-800'>Hobbies</div>
        <div className='hobby'>
          <div className="h-thumbnail h-36 my-3">
            <img className='h-full w-full object-cover rounded-xl' src="images/gaming.jpg" alt="" />
          </div>
          <div className='h-details my-3'>
            <div className='font-semibold text-lg text-gray-800'>Gaming</div>
            <div className='text-gray-500 font-medium'>Quisque feugiat malesuada molestie.</div>
          </div>
        </div>
        <div className='hobby'>
          <div className="h-thumbnail h-36 my-3">
            <img className='h-full w-full object-cover rounded-xl' src="images/cooking.jpg" alt="" />
          </div>
          <div className='h-details my-3'>
            <div className='font-semibold text-lg text-gray-800'>Cooking</div>
            <div className='text-gray-500 font-medium'>Quisque feugiat malesuada molestie.</div>
          </div>
        </div>
        <div className='hobby'>
          <div className="h-thumbnail h-36 my-3">
            <img className='h-full w-full object-cover rounded-xl' src="images/biking.jpg" alt="" />
          </div>
          <div className='h-details my-3'>
            <div className='font-semibold text-lg text-gray-800'>Biking</div>
            <div className='text-gray-500 font-medium'>Quisque feugiat malesuada molestie.</div>
          </div>
        </div>
    </div>
  )
}

export default Hobbies