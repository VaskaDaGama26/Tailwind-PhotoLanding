import React from 'react'

const ImageBadge = (label) => {
  return (
    <div className='px-1.5 user-select rounded-2xl lg:rounded-3xl bg-rose-500 absolute top-1 lg:right-2 lg:top-2 right-1 text-xs md:text-lg font-bold'>{label}</div>
  )
}

export default ImageBadge