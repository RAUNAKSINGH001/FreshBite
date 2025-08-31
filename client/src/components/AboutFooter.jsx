import React from 'react'
import {NavLink} from 'react-router-dom'
function AboutFooter() {
  return (
    <div className='w-full mt-40 px-10 py-5 rounded-2xl flex flex-col gap-3 items-center bg-white/5'>
      <div><p className='text-3xl font-extrabold  '>Join US On <span className='text-amber-600'>Our Journey</span></p></div>
      <p className='text-center'>At FRESHBITE, we're not just building a business—we're creating experiences that bring people together. Every dish we serve, every innovation we craft, and every story we share is fueled by passion and purpose. We invite you to be part of our journey—because together, we can make every moment memorable.</p>
   <NavLink to="/contact" className="px-5 py-2 rounded-2xl bg-amber-600">Contact Us Today</NavLink>
    </div>
  )
}

export default AboutFooter
