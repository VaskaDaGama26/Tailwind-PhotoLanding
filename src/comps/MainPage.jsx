import React from 'react'
import blobs from '../static/Blobs.svg'
import arrowlabel from '../static/arrowlabel.svg'

const MainPage = () => {
  return (
    <div className='flex flex-col items-center px-2.5 mt-12'>
      <div>
        <h1 className='text-stone-950 text-center text-2xl font-bold mb-2.5'>Hire Full-Service Photographer For A Simple Hourly Fee</h1>
        <h2 className='text-stone-950 text-center text-xl font-semibold mb-2.5'>Create your products with top-tier photographer at an affordable price</h2>
      </div>
      <div className='w-full flex flex-row justify-evenly mt-7.5 mb-6'>
        <button className='shadow-std px-4 py-2.5 bg-rose-500 rounded-full'><a className='text-stone-950' href="#">See Pricing List</a></button>
        <button className='shadow-std px-4 py-2.5 bg-stone-950 rounded-full'><a className='text-orange-100' href="#">Book a call</a></button>
      </div>
      <div className='relative h-36 w-full'>
        <img className='absolute right-0' src={blobs} alt="Blobs" />
        <img className='absolute left-0 top-16' src={arrowlabel} alt="Some Recent works" />
      </div>
    </div>

  )
}

export default MainPage