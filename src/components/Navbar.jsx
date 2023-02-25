import React, { useEffect, useState } from 'react';
import Logo from '../assets/zillow-logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import LogoWhite from '../assets/zillow-white.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { logout, auth } from '../service/firebase';
import ModalComponent from './ModalComponent';
import Login from '../pages/Login';
import { Link, useLocation } from 'react-router-dom';
import Register from '../pages/Register';

const Navbar = () => {
  const location = useLocation();
  const [user] = useAuthState(auth);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  useEffect(() => {},[user])
  return (
    <div 
      className={`w-full bg-transparent md:bg-white 
      ${location.pathname!=="/"&&"border border-gray-400"}`} 
    >
      <div className='md:mx-[80px] mx-0' >
        <div className='w-full flex md:hidden px-4 justify-between h-[60px] items-center'>
          <div>
            <AiOutlineMenu 
              className={`text-2xl cursor-pointer ${location.pathname==="/"?"text-white":
              "text-primary"}`} 
            />
          </div>
          <div>
            <img src={LogoWhite} alt="logo" className='w-[120px] h-[25px] cursor-pointer' />
          </div>
          {
            !(user) ? (
              <div>
                <Link 
                  className={`text-[15px] ${location.pathname==="/"?"text-white":
                  "text-primary"}`} 
                  to="/login"
                >
                  Sign In
              </Link>
              </div>
            ) : (
              <button 
                className={`border-none bg-transparent text-[15px] ${location.pathname==="/"?"text-white":
                "text-primary"}`} 
                onClick={logout} 
              >
                Sign Out
              </button>
            )
          }
        </div>
        <div className='w-full h-[80px] pr-6 md:flex justify-between items-center hidden' >
          <div>
            <ul className='flex list-none gap-x-7' >
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
            <ul className='flex list-none gap-x-7' >
              <li><a href="/" >Manage Rentals</a></li>
              <li><a href="/" >Advertise</a></li>
              <li><a href="/" >Help</a></li>
              {
                !(user) ? 
                (<li>
                  <button 
                    className='bg-transparent border-none' 
                    onClick={()=>setLoginModal(!loginModal)} 
                    type="button"
                  >
                    Sign In
                </button>
                </li>) :
                (<li onClick={logout} >Sign Out</li>)
              }
            </ul>
          </div>
        </div>
      </div>
      <ModalComponent open={loginModal} handleClose={()=>setLoginModal(false)} width={500} >
        <Login setLoginModal={setLoginModal} setRegisterModal={setRegisterModal} />
      </ModalComponent>
      <ModalComponent open={registerModal} handleClose={()=>setRegisterModal(false)} width={500} >
        <Register setLoginModal={setLoginModal} setRegisterModal={setRegisterModal} />
      </ModalComponent>
    </div>
  )
}

export default Navbar