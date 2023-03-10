import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarSticky from '../components/NavbarSticky';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Reset from '../pages/Reset';

const index = () => {
  return <RoutePage />
}

const RoutePage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScrollPos(window.pageYOffset);
  };
  return (
    <div>
      {
        location.pathname!=="/" ? (
          <div className='absolute top-0 z-50 w-full ' >
            <Navbar 
              loginModal={loginModal}
              setLoginModal={setLoginModal}
              registerModal={registerModal}
              setRegisterModal={setRegisterModal}
            />
          </div>
        ) :
        (scrollPos < 200) ? (
          <div className='absolute top-0 z-50 w-full ' >
            <Navbar 
              loginModal={loginModal}
              setLoginModal={setLoginModal}
              registerModal={registerModal}
              setRegisterModal={setRegisterModal}
            />
          </div>
        ) : (
          <div className='fixed top-0 z-50 w-full ' >
            <NavbarSticky />
          </div>
        )
      }
      <div className='' >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset setRegisterModal={setRegisterModal} />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default index