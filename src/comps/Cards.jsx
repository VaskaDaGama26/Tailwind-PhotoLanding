import React from 'react'

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
    <div className='my-6 mx-2.5 flex flex-wrap justify-between gap-50px'>
      
      {Cards.map((card, index) => (
        <div key={index} className='relative img-sizes'>
          <img className='rounded-xl' src={card.src} alt='Image' />
          <div className='px-1.5 rounded-full bg-rose-500 absolute top-2 right-2 text-xs font-bold'>{card.badge}</div>
        </div>
      ))}

    </div>
  )
}

export default Cards