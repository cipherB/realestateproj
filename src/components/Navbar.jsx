import React from 'react';
import Logo from '../assets/zillow-logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import LogoWhite from '../assets/zillow-white.svg';

const Navbar = () => {
  return (
    <div className='w-full md:bg-white bg-transparent' >
      <div className='md:mx-[80px] mx-0' >
        <div className='w-full flex md:hidden px-4 justify-between h-[60px] items-center'>
          <div>
            <AiOutlineMenu className='text-white text-2xl cursor-pointer' />
          </div>
          <div>
            <img src={LogoWhite} alt="logo" className='w-[120px] h-[25px] cursor-pointer' />
          </div>
          <div>
            <a className='text-[15px] text-white' href="/" >Sign In</a>
          </div>
        </div>
        <div className='w-full h-[80px] pr-6 md:flex justify-between items-center hidden' >
          <div>
            <ul className='list-none flex gap-x-7' >
              <li><a href="/" >Buy</a></li>
              <li><a href="/" >Rent</a></li>
              <li><a href="/" >Sell</a></li>
              <li><a href="/" >Home Loans</a></li>
              <li><a href="/" >Agent finder</a></li>
            </ul>
          </div>
          <div>
            <img src={Logo} alt="logo" className='w-[160px] h-[35px]' />
          </div>
          <div>
            <ul className='list-none flex gap-x-7' >
              <li><a href="/" >Manage Rentals</a></li>
              <li><a href="/" >Advertise</a></li>
              <li><a href="/" >Help</a></li>
              <li><a href="/" >Sign in</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar