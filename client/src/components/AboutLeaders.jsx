import React from 'react'
import profile from '../assets/profile.jpg'
function AboutLeaders() {
  return (
    <div className='w-full mt-40 px-10 py-5 rounded-2xl flex flex-col gap-3 justify-between bg-white/5'>
          <p className='text-3xl text-center font-extrabold'>Lets Meets Our </p>
          <p className='text-center '>Our journey is guided by passionate visionaries who bring innovation, dedication, and purpose to everything we do. Together, they inspire growth and lead us toward a brighter future.</p>
         
         <div className='flex justify-between '>

         
          <div className='flex flex-col gap-3 rounded-2xl '>
            <img src={profile} alt="profile1" className='w-[300px] h-[400px] rounded-t-2xl' />
            <p className='text-2xl font-bold'>RAUNAK SINGH</p>
            <p className='text-1xl font-semibold'>Founder and CEO</p>
          </div>
          <div className='flex flex-col gap-3 rounded-2xl '>
            <img src={profile} alt="profile2" className='w-[300px] h-[400px] rounded-t-2xl' />
            <p className='text-2xl font-bold'>RAUNAK SINGH</p>
            <p className='text-1xl font-semibold'>Co-founder and CTO</p>
          </div>
         <div className='flex flex-col gap-3 rounded-2xl '>
            <img src={profile} alt="profile3" className='w-[300px] h-[400px] rounded-t-2xl' />
            <p className='text-2xl font-bold'>RAUNAK SINGH</p>
            <p className='text-1xl font-semibold'>Co-founder and CFO</p>
          </div>
          </div>
        </div>

  )
}

export default AboutLeaders
