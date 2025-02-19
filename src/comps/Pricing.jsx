import React from 'react'
import HeaderBadge from './UI/HeaderBadge'
import specsIcon from '../static/SpecsIcon.svg'

const Pricing = () => {

  const PricingPlans = [
    {
      id: 1,
      badgeLabel: 'Standart',
      badgeClasses: 'w-max shadow-std px-3 py-1 mb-2 bg-stone-950 rounded-full',
      badgeColorText: 'text-orange-100',
      price: '9.9',
      desc: 'One location of your choice',
      specs: [
        { id: 1, label: '20 edited high-resolution digital images', },
        { id: 2, label: 'Digital download via private online gallery', },
        { id: 3, label: 'Basic retouching and color correction', },
        { id: 4, label: 'Option to purchase additional prints and products', }
      ]

    },
    {
      id: 2,
      badgeLabel: 'Premium',
      badgeClasses: 'w-max shadow-std px-3 py-1 mb-2 bg-rose-500 rounded-full',
      badgeColorText: 'text-stone-950',
      price: '19.9',
      desc: 'Up to three locations of your choice',
      specs: [
        { id: 1, label: '60 edited high-resolution digital images', },
        { id: 2, label: 'Digital download via private online gallery + USB drive with all images', },
        { id: 3, label: 'Personalized consultation and planning session', },
        { id: 4, label: 'Priority editing and fast-track delivery', }
      ]
    },

  ]

  return (
    <div className='flex flex-col items-center justify-center'>

      {HeaderBadge('Pricing')}
      <div>
        <h1 className='text-stone-950 text-center text-2xl font-bold mb-2.5'>Membership</h1>
        <h2 className='text-stone-950 text-center text-xl font-semibold mb-2.5'>Pick the plan that suits you</h2>
      </div>
      {PricingPlans.map((item, index) => (
        <div key={index} className='flex flex-col items-start w-full px-2.5 pb-6'>
          <div className='w-full p-4 border-1 border-rose-500-3 rounded-xl'>

            <div className={item.badgeClasses}>
              <a className={item.badgeColorText}>{item.badgeLabel}</a>
            </div>

            {/* Price */}
            <div className='flex flex-row items-baseline mb-2'>
              <p className='text-2xl font-semibold text-rose-500'>${item.price}</p>
              <p className='text-xs'>/hour</p>
            </div>

            <p className='font-bold text-14 mb-2.5'>{item.desc}</p>
            <hr className='px-3.5 pb-2.5 color-rose-500-3' />

            {/* Checks */}
            <div className='flex flex-col gap-2.5'>

              {item.specs.map((specs, index) => (

                <div key={index} className='flex flex-row items-center gap-1'>
                  <img className='w-2.5 h-2.5' src={specsIcon} alt="Specs" />
                  <p className='font-normal text-xs text-stone-500'>{specs.label}</p>
                </div>
              ))}

            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Pricing