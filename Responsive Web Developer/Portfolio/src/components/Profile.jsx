import React from 'react'
import useIcon from '../hooks';

const Profile = () => {
    const EmailIcon = useIcon("Email")
    const PhoneIcon = useIcon("Phone")
    return (
    <div className="profile">

        <div className='lg:col-span-1 lg:pr-4'>
            <img src="images/pic.jpg" alt="" className='h-full rounded-xl m-auto'/>
        </div>
        <div className="lg:col-span-2 xl:col-span-3">
            <div className="flex flex-col">
                <div className='font-semibold text-lg xs:text-2xl text-gray-800 pt-4 lg:pt-0'>Bill Pearson</div>
                <div className='font-medium text-sm text-gray-500 pb-2'>Front-end Developer</div>
                <div className='flex flex-row pb-1'>
                    <EmailIcon style={{ fontSize: 20 }} />
                    <div className='font-medium text-sm pl-4 text-gray-800'>billy@example.com</div>
                </div>
                <div className='flex flex-row'>
                    <PhoneIcon style={{ fontSize: 20 }}/>
                    <div className='font-medium text-sm pl-4 text-gray-800'>(+603) 546 624 342</div>
                </div>
            </div> 
            <div className='py-8 font-medium text-gray-500 text-xs xs:text-base'>
                Self-motivated developer, who is willing to learn and create outstanding UI applications. <br /><br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eius deserunt labore quo adipisci ipsam nulla sed cupiditate odio itaque provident debitis, magnam tempora voluptate illum mollitia exercitationem saepe rem.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, illo officia! Mollitia maxime corrupti corporis earum nobis reiciendis cumque eius perspiciatis perferendis, blanditiis eos ad eaque placeat consectetur voluptates expedita?
            </div>
            </div>
        </div>
  )
}

export default Profile