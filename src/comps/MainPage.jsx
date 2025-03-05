import React from 'react'
import { Link } from 'react-scroll';
import HeaderLabel from './UI/HeaderLabel';

import blobs from '../static/Blobs.svg'
import arrowlabel from '../static/arrowlabel.svg'

const MainPage = () => {

  const linkButtons = [{id: 1, label: 'See Pricing List', classes: 'shadow-std main_page_button bg-rose-500 text-stone-950', path: 'pricing',},{id: 2, label: 'Book a call', classes: 'shadow-std main_page_button bg-stone-950 text-orange-100', path: 'contacts',}]

  return (
    <section id='main' className='max-w-7xl mx-auto relative flex flex-col items-center px-2.5 mt-12 mb-44 md:mb-24'>
      <div>

        <img className='absolute right-2.5 top-72 md:top-12 lg:w-40 lg:h-36 hover:rotate-180 duration-1000' src={blobs} alt="Blobs" />
        <img id='cards' className='absolute left-0 top-80 lg:top-64 lg:w-52 lg:h-24' src={arrowlabel} alt="Some Recent works" />
        
        {HeaderLabel('Hire Full-Service Photographer For A Simple Hourly Fee','Create your products with top-tier photographer at an affordable price')}
      
      </div>
      <div className='w-full flex flex-row justify-evenly mt-7.5 mb-6'>
        {linkButtons.map((link, index) => (
          <Link key={index} to={link.path} smooth={true} duration={1000} className={link.classes}>{link.label}</Link>
        ))}
      </div>
    </section>

  )
}

export default MainPage