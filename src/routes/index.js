import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarSticky from '../components/NavbarSticky';
import Landing from '../pages/Landing';
// import Login from '../pages/Login';
import Register from '../pages/Register';
import ModalComponent from '../components/ModalComponent';
import Login from '../components/modal/Login';

const index = () => {
  return <RoutePage />
}

const RoutePage = () => {
  const [scrollPos, setScrollPos] = useState(0);
  const [loginModal, setLoginModal] = useState(false);

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
        scrollPos < 200 ? (
          <div className='absolute top-0 z-50 w-full ' >
            <Navbar 
              loginModal={loginModal}
              setLoginModal={setLoginModal}
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
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
      <ModalComponent open={loginModal} handleClose={()=>setLoginModal(false)} width={600} >
        <Login />
      </ModalComponent>
    </div>
  )
}

export default index