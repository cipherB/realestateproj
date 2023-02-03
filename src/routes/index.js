import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Landing from '../pages/Landing';

const index = () => {
  return (
    <div>
      <div className='fixed top-0 w-full z-50 ' >
        <Navbar />
      </div>
      <div className='' >
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </div>
  )
}

export default index