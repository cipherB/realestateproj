import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, sendPasswordReset } from '../service/firebase';

const Reset = ({ setRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if(loading) return;
    if(user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user, loading])
  return (
    <div className='items-center justify-center w-full h-full md:w-screen md:h-screen md:flex' >
      <div className="px-4 py-24 md:p-7">
        <h2 className='mb-4 text-2xl font-bold text-center' >Reset Password</h2>
        <input 
          type="email" 
          name="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className='p-[10px] w-full text-lg bg-gray-200 mb-8'
          placeholder='E-mail Address'
        />
        <button 
          className='w-full py-2.5 rounded-sm text-white bg-[#4285f4] border-none text-lg mb-4' 
          onClick={()=>sendPasswordReset(email)}
        >
          Reset Password
        </button>
        <div>
          Don't have an account?{" "}
          <Link to="/register" className='md:hidden text-primary' >Register</Link> 
          <button 
            onClick={()=>setRegisterModal(true)} 
            className='hidden bg-transparent border-none cursor-pointer md:inline text-primary' 
          >
            Register
          </button>
          {" "}now.
        </div>
      </div>
    </div>
  )
}

export default Reset