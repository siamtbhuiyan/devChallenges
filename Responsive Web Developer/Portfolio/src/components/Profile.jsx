import React from 'react'
import useIcon from '../hooks';

const Profile = () => {
    const EmailIcon = useIcon("Email")
    const PhoneIcon = useIcon("Phone")
    return (
    <div className="profile">
        <div className='col-span-1'>
            <img src="images/pic.jpg" alt="" className='h-full rounded-xl'/>
        </div>
        <div className="col-span-3">
            <div className="flex flex-col">
            <div className='flex justify-between'>
                <div className='font-semibold text-2xl text-gray-800'>Bill Pearson</div>
                <div className='flex flex-row'>
                <EmailIcon style={{ fontSize: 20 }}/>
                <div className='font-medium text-sm pl-4 text-gray-800'>billy@example.com</div>
                </div>
            </div>
            <div className='flex justify-between'>
                <div className='font-medium text-sm text-gray-500'>Front-end Developer</div>
                <div className='flex flex-row'>
                <PhoneIcon style={{ fontSize: 20 }}/>
                <div className='font-medium text-sm pl-4 text-gray-800'>(+603) 546 624 342</div>
                </div>
            </div>
            <div className='py-8 font-medium text-gray-500'>
                Self-motivated developer, who is willing to learn and create outstanding UI applications.
            </div>
            </div>
        </div>
    </div>
  )
}

export default Profile