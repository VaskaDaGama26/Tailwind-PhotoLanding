import React from 'react'

import logo from '../static/Logo.svg'

const Header = () => {
  return (
    <div className='flex flex-row items-center justify-between h-auto w-auto px-2.5 py-3'>
      <div className='flex items-center'>
        <img src={logo} alt="Logo" />
      </div>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
      </svg>
      </div>
    </div>
  )
}

export default Header