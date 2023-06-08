import React, {useContext, useRef, useState} from 'react';
import './Login.scss'
import { adminCredentials } from '../utils/data';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  const submitHandler = (e) => {
    e.preventDefault();
  
    const userName = usernameRef.current.value;
    const userPassword = passwordRef.current.value;

    if(userName.trim() == adminCredentials.username && userPassword.trim() == adminCredentials.password) {
      navigate("/admin");
        return;
    }
    else {
        setError('Invalid username or password!');
    
    }
  }

  
  return (
    <div className='login'>
      <form action="" className="form" onSubmit={submitHandler}>
        <div className="header">Login</div>
          <div className="input">
           <label htmlFor="username">Username</label>
           <input type="text" id='username' ref={usernameRef}/>
          </div>
          <div className="input">
           <label htmlFor="password">Password</label>
           <input type="password" id='password' ref={passwordRef}/>
          </div>
          <div className="action">
            <button>Login</button>
            {error && <p>{error}</p>}
          </div>
      </form>
    </div>
  )
}

export default Login
