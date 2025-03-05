import React from 'react'

const HeaderLabel = (headerLabel, underHeaderLabel) => {
  return (
    <>
      <h1 className='text-stone-950 max-w-md lg:max-w-xl mx-auto text-center text-2xl lg:text-4xl font-bold mb-2.5'>{headerLabel}</h1>
      <h2 className='text-stone-950 max-w-md lg:max-w-xl mx-auto text-center text-xl lg:text-2xl font-semibold mb-2.5'>{underHeaderLabel}</h2>
    </>
  )
}

export default HeaderLabel