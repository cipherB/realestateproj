import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Logo from '../assets/zillow-logo.svg';

const NavbarSticky = () => {
  return (
    <div className='w-full bg-white' >
      <div 
        className='w-full h-[68px] border-b border-[#D1D1D5] flex justify-center 
        items-center relative px-4 md:px-0' 
      >
        <div className='absolute left-6 hidden md:block' >
            <img src={Logo} alt="logo" className='w-[140px] h-[38px]' />
          </div>
        <div 
          className='relative flex items-center w-full md:w-[668px] bg-white rounded-md
          hover:border-primary border border-[#D1D1D5]'
        >
          <input 
            type="search"
            name="search"
            className='rounded-md px-4 bg-white w-11/12 md:w-[648px] h-[43px] 
            focus:border-none border-none focus:outline-none'
            placeholder='Enter an address, neighborhood, city or zip code.'
          />
          <BsSearch 
            className='absolute right-4 cursor-pointer text-primary'
          />
        </div>
      </div>
    </div>
  )
}

export default NavbarSticky