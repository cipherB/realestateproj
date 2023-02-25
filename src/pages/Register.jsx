import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../service/firebase';
import Google from '../assets/google.png';

const Register = ({ setLoginModal, setRegisterModal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("please! Enter your name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(()=>{
    if(loading) {
      return;
    }
    if(user) {
      navigate("/");
      console.log("user", user);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user, loading]);

  const toggleModal = () => {
    setLoginModal(true);
    setRegisterModal(false);
  }
  return (
    <div className='w-full h-full' >
      <div className='px-4 py-24 md:p-7' >
        <h2 className='mb-4 text-2xl font-bold text-center' >Welcome to Zillow</h2>
        <input 
          type="text"  
          name="name" 
          id="name" 
          className='p-[10px] w-full text-lg bg-gray-200 mb-4'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="Full Name"
        />
        <input 
          type="email"  
          name="email" 
          id="email" 
          className='p-[10px] w-full text-lg bg-gray-200 mb-4'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input 
          type="password"  
          name="password" 
          id="password" 
          className='p-[10px] w-full text-lg bg-gray-200 mb-8'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
        />
        <button 
          className='w-full py-2.5 rounded-sm text-white bg-[#4285f4] border-none text-lg mb-4'
          onClick={register}
        >Register</button>
        <button 
          className='w-full py-2.5 rounded-sm bg-white flex justify-center border-gray-400 
          items-center border text-lg mb-3 gap-x-4'
          onClick={signInWithGoogle}
        >
          <img src={Google} alt="google" className='w-4 h-4' />
          Continue with Google
        </button>
        <div>
          Already have an account?{" "}
          <Link to="/login" className='md:hidden' >Login</Link> 
          <button onClick={toggleModal} className='hidden bg-transparent border-none md:inline' >
            Login
          </button>
          {" "}now.
        </div>
      </div>
    </div>
  )
}

export default Register;