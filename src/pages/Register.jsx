import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth, registerWithEmailAndPassword, signInWithGoogle } from '../service/firebase';

const Register = () => {
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[user, loading]);
  return (
    <div className='register' >
      <div className='register__container' >
        <input 
          type="text"  
          name="name" 
          id="name" 
          className="register__textBox" 
          value={name}
          onClick={(e)=>setName(e.target.value)}
          placeholder="Full Name"
        />
        <input 
          type="email"  
          name="email" 
          id="email" 
          className="register__textBox" 
          value={email}
          onClick={(e)=>setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input 
          type="password"  
          name="password" 
          id="password" 
          className="register__textBox" 
          value={password}
          onClick={(e)=>setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="register__btn" onClick={register}>Register</button>
        <button className="register__btn register__google" onClick={signInWithGoogle}>
          Register with Google
        </button>
        <div>Already have an account? <Link to="/login" >Login</Link> now.</div>
      </div>
    </div>
  )
}

export default Register;