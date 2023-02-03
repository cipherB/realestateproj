import React from 'react';
import Logo from '../assets/zillow-logo.svg';

const Navbar = () => {
  return (
    <div className='w-full bg-white' >
      <div className='mx-[80px]' >
        <div className='w-full h-[80px] pr-6 flex justify-between items-center' >
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