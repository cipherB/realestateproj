import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NavbarSticky from '../components/NavbarSticky';
import Landing from '../pages/Landing';

const index = () => {
  return <RoutePage />
}

const RoutePage = () => {
  const [scrollPos, setScrollPos] = useState(0);

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
          <div className='absolute top-0 w-full z-50 ' >
            <Navbar />
          </div>
        ) : (
          <div className='fixed top-0 w-full z-50 ' >
            <NavbarSticky />
          </div>
        )
      }
      <div className='' >
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default index