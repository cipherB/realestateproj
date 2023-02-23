import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, sendPasswordReset } from '../service/firebase';

const Reset = () => {
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
    <div className='reset' >
      <div className="reset__container">
        <input 
          type="email" 
          name="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          className="reset__textBox" 
          placeholder='E-mail Address'
        />
      </div>
      <button className="reset__btn" onClick={()=>sendPasswordReset(email)}>
        Send password reset mail
      </button>
      <div>
        Don't have an account? <Link to="/register" >Register</Link> now.
      </div>
    </div>
  )
}

export default Reset