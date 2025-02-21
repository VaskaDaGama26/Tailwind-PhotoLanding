import React from 'react'
import blobs from '../static/Blobs.svg'
import arrowlabel from '../static/arrowlabel.svg'

const MainPage = () => {
  return (
    <div className='max-w-7xl mx-auto relative flex flex-col items-center px-2.5 mt-12 mb-44 md:mb-24'>
      <div>

        <img className='absolute right-2.5 top-72 md:top-12 lg:w-40 lg:h-36 hover:rotate-180 duration-1000' src={blobs} alt="Blobs" />
        <img className='absolute left-0 top-80 lg:top-64 lg:w-52 lg:h-24' src={arrowlabel} alt="Some Recent works" />

        <h1 className='text-stone-950 max-w-md lg:max-w-xl mx-auto text-center text-2xl md:text-4xl font-bold mb-2.5'>Hire Full-Service Photographer For A Simple Hourly Fee</h1>
        <h2 className='text-stone-950 max-w-md lg:max-w-xl mx-auto text-center text-xl md:text-2xl font-semibold mb-2.5'>Create your products with top-tier photographer at an affordable price</h2>
      </div>
      <div className='w-full flex flex-row justify-evenly mt-7.5 mb-6'>
        <button className='shadow-std px-4 py-2.5 bg-rose-500 rounded-full md:text-xl hover:scale-105 duration-300'><a className='text-stone-950' href="#">See Pricing List</a></button>
        <button className='shadow-std px-4 py-2.5 bg-stone-950 rounded-full md:text-xl hover:scale-105 duration-300'><a className='text-orange-100' href="#">Book a call</a></button>
      </div>
    </div>

  )
}

export default MainPage