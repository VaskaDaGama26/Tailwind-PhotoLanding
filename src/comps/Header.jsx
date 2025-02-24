import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../static/Logo.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    {
      id: 1,
      label: 'Works',
      path: 'cards',
      mobileClasses: 'mobileLink',
      desktopClasses: 'desktopLink',
    },
    {
      id: 2,
      label: 'Pricing',
      path: 'pricing',
      mobileClasses: 'mobileLink',
      desktopClasses: 'desktopLink',
    },
    {
      id: 3,
      label: 'Contacts',
      path: 'contacts',
      mobileClasses: 'mobileLink',
      desktopClasses: 'desktopLink', 
    }
  ]



  return (
    <section className='flex flex-row items-center justify-between h-auto max-w-7xl m-auto px-2.5 py-3'>
      <div className='flex items-center'>
        <img className='sm:w-28 sm:h-9' src={logo} alt="Logo" />
      </div>
      <div>
        <svg onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 md:size-9 lg:hidden">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
        <div className={`border-b-rose-500-3 absolute z-50 top-12 left-0 w-full h-60 bg-orange-100 flex flex-col items-center justify-center transition-transform duration-500 transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-80'}`}>
          <nav>
            <ul className='space-y-4'>
              {navLinks.map((link, index)=> (
                <Link key={index} className='cursor-pointer' to={link.path} smooth={true} duration={1000} onClick={closeMenu}><li className={link.mobileClasses}>{link.label}</li></Link>
              ))}
            </ul>
          </nav>
        </div>
        <div className='hidden lg:flex'>
          <nav>
            <ul className='flex flex-row bg-stone-950 rounded-full'>
            {navLinks.map((link, index)=> (
                <Link key={index} className='cursor-pointer' to={link.path} smooth={true} duration={1000} onClick={closeMenu}><li className={link.desktopClasses}>{link.label}</li></Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default Header;
