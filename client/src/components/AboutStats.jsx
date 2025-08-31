import React from 'react'

function AboutStats() {
  return (
    <div className='w-full mt-40 px-10 py-5 rounded-2xl flex justify-between bg-white/5'>
          <div className='px-5 py-2 flex flex-col gap-3 justify-center items-center'>
            <p className='text-3xl font-bold'>10+</p>
            <p className='text-sm font-normal'>Years Expereience</p>
          </div>
         <div className='px-5 py-2 flex flex-col gap-3 justify-center items-center'>
            <p className='text-3xl font-bold'>99%</p>
            <p className='text-sm font-normal'>Accuracy Rate</p>
          </div>
          <div className='px-5 py-2 flex flex-col gap-3 justify-center items-center'>
            <p className='text-3xl font-bold'>500+</p>
            <p className='text-sm font-normal'>Positive Reviews</p>
          </div>
          <div className='px-5 py-2 flex flex-col gap-3 justify-center items-center'>
            <p className='text-3xl font-bold'>600+</p>
            <p className='text-sm font-normal'>Trusted Partners</p>
          </div>
        </div>
  )
}

export default AboutStats
