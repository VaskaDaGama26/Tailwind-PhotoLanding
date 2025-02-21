import React from 'react'
import HeaderBadge from './UI/HeaderBadge'

import Paperplane from '../static/paperplane.png'

import Mail from '../static/Mail.svg'
import Fb from '../static/Fb.svg'
import Inst from '../static/Inst.svg'
import Phone from '../static/Phone.svg'

const Contacts = () => {
  
  const ContactItems = [
    {
      id: 1,
      label: '@photo_fb',
      alt: 'Facebook',
      link: '',
      icon: Fb,
    },
    {
      id: 2,
      label: '+999 123-123-12',
      alt: 'Phone',
      link: '',
      icon: Phone,
    },
    {
      id: 3,
      label: 'photo@yandex.ru',
      alt: 'Mail',
      link: '',
      icon: Mail,
    },
    {
      id: 4,
      label: '@photo_inst',
      alt: 'Instagram',
      link: '',
      icon: Inst,
    }
  ]

  return (
    <div className='flex flex-col items-center justify-center'>

      {HeaderBadge('Contacts')}
      <div className='mb-6'>
        <h1 className='text-stone-950 text-center text-2xl lg:text-4xl font-bold mb-2.5'>Contact me</h1>
        <h2 className='text-stone-950 text-center text-xl lg:text-2xl font-semibold mb-2.5'>You can write me or call me wherever is convenient for you</h2>
      </div>
      <div className='max-w-7xl flex flex-row items-center justify-between w-full px-2.5 mb-5'>
        <div className='flex flex-col gap-6'>

          {ContactItems.map((item, index) => (
            <div key={index} className='flex flex-row gap-2.5'>
            <img className='lg:w-9 lg:h-9' src={item.icon} alt={item.alt} />
            <a href={item.link} className='font-normal lg:text-xl text-xs hover:text-rose-500 duration-300'>{item.label}</a>
          </div>
          ))}

        </div>
        <div className='flex flex-col'>
          <img className='w-28 h-28 lg:w-48 lg:h-52' src={Paperplane} alt="Paperplane" />
        </div>
      </div>
    </div>
  )
}

export default Contacts