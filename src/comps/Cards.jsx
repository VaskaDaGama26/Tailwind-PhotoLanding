import React from 'react'

import ImageBadge from './UI/ImageBadge';

import PairImg from '../static/Pair.jpg'
import LandscapeImg from '../static/Landscape.jpg'
import PortraitImg from '../static/Portrait.jpg'
import FashionImg from '../static/Fashion.jpg'

const Cards = () => {
  
  const Cards = [
    {
      id: 1,
      src: PairImg,
      badge: 'Pair'
    },
    {
      id: 2,
      src: LandscapeImg,
      badge: 'Landscape'
    },
    {
      id: 3,
      src: PortraitImg,
      badge: 'Portrait'
    },
    {
      id: 4,
      src: FashionImg,
      badge: 'Fashion'
    }
  ]

  return (
    <section className='my-6 px-2.5 flex flex-wrap justify-between max-w-7xl mx-auto'>
      
      {Cards.map((card, index) => (
        <div key={index} className='mb-8 relative w-28 h-36 md:w-40 md:h-52 lg:w-52 lg:h-72'>
          <img className='rounded-xl w-full h-full object-cover hover:shadow-2xl duration-300' src={card.src} alt='Image' />
          {ImageBadge(card.badge)}
        </div>
      ))}

    </section>
  )
}

export default Cards