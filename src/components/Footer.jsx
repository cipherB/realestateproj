import React from 'react';
import { BsArrowRight, BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaTiktok } from 'react-icons/fa';
import AppStore from '../assets/app-store-badge.svg';
import PlayStore from '../assets/google-play-badge.svg';
import Logo from '../assets/zillow-logo.svg';
import ZillowFooter from '../utilities/ZillowFooter';
import FooterArt from '../assets/footer-art.svg';

const Footer = () => {
  return (
    <div className='md:px-20 w-full' >
      <nav className='border-y border-[#d8d8d8] py-6' >
        <ul 
          className='flex flex-col md:flex-row md:justify-center gap-x-5 md:items-center list-none
          flex-wrap h-[238px] md:h-auto gap-y-2.5 px-6 md:px-0' 
        >
          <li><a href="/" className='text-sm text-left' >About</a></li>
          <li><a href="/" className='text-sm text-left' >Zestmates</a></li>
          <li><a href="/" className='text-sm text-left' >Research</a></li>
          <li><a href="/" className='text-sm text-left' >Careers</a></li>
          <li><a href="/" className='text-sm text-left' >Help</a></li>
          <li><a href="/" className='text-sm text-left' >Advertise</a></li>
          <li><a href="/" className='text-sm text-left' >Fair Housing Guide</a></li>
          <li><a href="/" className='text-sm text-left' >Terms of Use</a></li>
          <li><a href="/" className='text-sm text-left' >Privacy Portal</a></li>
          <li><a href="/" className='text-sm text-left' >Cookie Preference</a></li>
          <li><a href="/" className='text-sm text-left' >Blog</a></li>
          <li><a href="/" className='text-sm text-left' >AI</a></li>
          <li><a href="/" className='text-sm text-left' >Mobile Apps</a></li>
        </ul>
        <ul 
          className='flex flex-col md:flex-row md:justify-center gap-x-5 md:items-center list-none
          flex-wrap h-[102px] md:h-auto gap-y-2.5 px-6 md:px-0'  
        >
          <li><a href="/" className='text-sm text-left' >Trulia</a></li>
          <li><a href="/" className='text-sm text-left' >StreetEasy</a></li>
          <li><a href="/" className='text-sm text-left' >HotPads</a></li>
          <li><a href="/" className='text-sm text-left' >Out East</a></li>
          <li><a href="/" className='text-sm text-left' >ShowingTime+</a></li>
        </ul>
        <div className='mt-4 flex justify-center items-center text-link text-sm' >
          <a href="/">Do Not Sell or Share My Personal Information</a><BsArrowRight />
        </div>
      </nav>
      <div className='py-6' >
        <div className='md:mx-[280px] md:mb-6 mb-4 mx-6' >
          <p className='text-center text-[10px] text-[#54545A] leading-4' >
            Zillow Group is committed to ensuring digital accessibility for 
            individuals with disabilities. We are continuously working to improve the 
            accessibility of our <span className='hidden md:block py-0 my-0' ></span>
            web experience for everyone, and we welcome feedback and 
            accommodation requests. If you wish to report an issue or seek an accommodation, please
            <span className='hidden md:block py-0 my-0' ></span>
            <a className='underline text-link' href='/' > let us know</a> 
          </p>
        </div>
        <div className='md:mx-[280px] md:mb-6 mb-4 mx-6 text-[10px]' >
          <p className='text-center' >
            Zillow, Inc. holds real estate brokerage
            <a href='/' className='underline text-link' > licenses </a>
            in multiple states. Zillow (Canada), Inc. holds real estate brokerage
            <a href='/' className='underline text-link' > licenses </a> 
            in multiple provinces.<br/>
            <a href='/' className='underline text-link' >
              § 442-H New York Standard Operating Procedures
            </a><br/>
            <a href='/' className='underline text-link' >
              § New York Fair Housing Notice
            </a><br/>
            TREC: <a href='/' className='underline text-link' >
              Information about brokerage services 
            </a>,
            <a href='/' className='underline text-link' >
               Consumer protection notice
            </a><br/>
            California DRE #1522444,<br/>
            <a href='/' className='underline text-link m-2 text-sm' >
              Contact Zillow, Inc. Brokerage
            </a><br/>
          </p>
        </div>
        <div className='md:mx-[280px] md:mb-6 mb-4 mx-6 text-[10px]' >
          <p className='text-center' >
            For listings in Canada, the trademarks REALTOR®, REALTORS®, and the REALTOR® 
            logo are controlled by The Canadian Real Estate Association (CREA) and<br/> 
            identify real estate professionals who are members of CREA. The trademarks 
            MLS®, Multiple Listing Service® and the associated logos are owned by CREA<br/> 
            and identify the quality of services provided by 
            real estate professionals who are members of CREA. Used under license.
          </p>
        </div>
        <div className='flex justify-center mb-6 items-center' >
          <img src={AppStore} alt="appStore" className=" w-24 h-8 cursor-pointer pl-2" />
          <img src={PlayStore} alt="playStore" className=" w-[108px] h-8 cursor-pointer pl-2" />
        </div>
        <div className='flex flex-col md:flex-row justify-center mb-6 items-center' >
          <a href="/" className='md:flex justify-center pb-6 md:pb-0' >
            <img src={Logo} alt="logo" className='cursor-pointer w-[152px] h-8 md:pl-2' />
          </a>
          <div className=' flex items-end md:pl-2 pb-6 md:pb-0' >
            <p className='text-sm' >Follow us:</p>
            <div className='flex items-center' >
              <BsFacebook className='text-[32px] text-[#3b5998] pl-2 cursor-pointer' />
              <BsInstagram className='text-[32px] text-primary pl-2 cursor-pointer' />
              <FaTiktok className='text-[32px] text-link pl-2 cursor-pointer' />
              <BsTwitter className='text-[32px] text-[#00acee] pl-2 cursor-pointer' />
            </div>
          </div>
          <div className=' flex items-end md:pl-2 pb-6 md:pb-0' >
            <p className='text-sm px-1' ><span aria-hidden="true">© 2006-2023 Zillow</span></p>
            <div className='w-8 h-8' >
              <ZillowFooter />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mb-1 md:mb-2' >
        <img src={FooterArt} alt="footer" className='w-full' />
      </div>
    </div>
  )
}

export default Footer