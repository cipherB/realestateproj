import React from 'react';
import { BsSearch, BsChevronDown } from 'react-icons/bs';
import Img1 from '../assets/GatedCarousel_Desktop.webp';
import Buy from '../assets/Buy_a_home.webp';
import Sell from '../assets/Sell_a_home.webp';
import Rent from '../assets/Rent_a_home.webp';

const service = [
  {
    img: Buy,
    title: "Buy a home",
    describe: `Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.`,
    button: "Browse homes",
    link: "/"
  },
  {
    img: Sell,
    title: "Sell a home",
    describe: `No matter what path you take to sell your home, we can help you navigate a successful sale.`,
    button: "See your options",
    link: "/"
  },
  {
    img: Rent,
    title: "Rent a home",
    describe: `We're creating a seamless online experience - from shopping on the largest rental network, to applying to paying rent.`,
    button: "Find rentals",
    link: "/"
  }
]

const Landing = () => {
  return (
    <div>
      {/* First Section */}
      <div className='h-[488px] landing flex justify-center' >
        <div className='py-[135px]' >
          <h1 className='text-white font-black mb-8 text-center' >Find it. Tour it. Own it.</h1>
          <div className='relative flex items-center w-[668px] bg-white rounded-md'>
            <input 
              type="search"
              name="search"
              className='rounded-md px-4 bg-white w-[648px] h-[70px] 
              focus:border-none border-none focus:outline-none'
              placeholder='Enter an address, neighborhood, city or zip code.'
            />
            <BsSearch 
              className='absolute right-4 cursor-pointer'
            />
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className='mt-8'>
        <div className=' px-[120px] py-16 flex justify-center gap-x-6 items-center'>
          <div>
            <p className='pb-2 font-bold text-xl text-center' >Get home recommendations</p>
            <p className='text-[#596b82] text-center' >
              Sign in for a more personalized experience
            </p>
            <div className='flex justify-center mt-4' >
              <button
                className='border bg-transparent text-primary border-primary py-[9px] px-4
                font-bold rounded'
              >
                Sign in
              </button>
            </div>
          </div>
          <div>
            <img src={Img1} alt="gated" className='md:w-auto md:h-auto' />
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className='py-16 px-[120px] bg-[#f9f9fb]' >
        <div className='flex justify-center gap-x-6' >
          {
            service.map((item, id) => (
              <div 
                key={id} 
                className="w-[384px] h-[536px] bg-white rounded transition-all duration-200
                hover:scale-105 cursor-pointer p-6 land-service" 
                style={{boxShadow:"rgb(0 0 0 / 30%) 0px 2px 4px 0px"}}
              >
                <div>
                  <img src={item.img} alt={item.title} className="w-full h-[188px]" />
                </div>
                <div className='mt-4' >
                  <h4 className='font-bold text-2xl text-center' >{item.title}</h4>
                  <p className='mt-4 text-center leading-6' >{item.describe}</p>
                  <div className='mt-6 mb-4 flex justify-center' >
                    <button className='btn-service' >
                      {item.button}
                    </button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      {/* Fourth Section */}
      <div className='py-[31px] mx-[120px] px-6 flex justify-center' >
        <div>
          <ul className='list-none flex' >
            <li className='border-r-2' >
              <button 
                className='py-3 mx-[69px] px-4 gap-x-3 flex border-none bg-transparent
                font-bold items-center' 
              >
                Real Estate
                <BsChevronDown className='text-primary text-xl font-extrabold' />
              </button>
            </li>
            <li className='border-r-2' >
              <button 
                className='py-3 mx-[69px] px-4 gap-x-3 flex border-none bg-transparent
                font-bold items-center' 
              >
                Rentals
                <BsChevronDown className='text-primary text-xl font-extrabold' />
              </button>
            </li>
            <li className='border-r-2' >
              <button 
                className='py-3 mx-[69px] px-4 gap-x-3 flex border-none bg-transparent
                font-bold items-center' 
              >
                Mortgage Rates
                <BsChevronDown className='text-primary text-xl font-extrabold' />
              </button>
            </li>
            <li className='' >
              <button 
                className='py-3 mx-[69px] px-4 gap-x-3 flex border-none bg-transparent
                font-bold items-center' 
              >
                Browse Homes
                <BsChevronDown className='text-primary text-xl font-extrabold' />
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Landing