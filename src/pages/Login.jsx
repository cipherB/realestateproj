import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../service/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Google from '../assets/google.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if(user) navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user, loading])
  return (
    <div className='w-full h-full' >
      <div className='px-4 py-24 md:p-7' >
        <h2 className='mb-4 text-2xl font-bold text-center' >Welcome to Zillow</h2>
        <div>
          <input 
            type='email' 
            id='email'
            name='email'
            className='p-[10px] w-full text-lg bg-gray-200 mb-4'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='E-mail Address'
          />
          <input 
            type='password' 
            name='password' 
            id='password'
            className='p-[10px] w-full text-lg bg-gray-200 mb-8'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password' 
          />
          <button
            className='w-full py-2.5 rounded-sm text-white bg-[#4285f4] border-none text-lg mb-4'
            onClick={() => logInWithEmailAndPassword(email, password)}
          >
            Login
          </button>
          <button
            className='w-full py-2.5 rounded-sm bg-white flex justify-center border-gray-400 
            items-center border text-lg mb-3 gap-x-4'
            onClick={signInWithGoogle}
          >
            <img src={Google} alt="google" className='w-4 h-4' />
            Login with Google
          </button>
          <div>
            <Link to='/reset' >Forgot Password</Link>
          </div>
          <div>
            Don't have an account? <Link to='/register' >Register</Link> now.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;