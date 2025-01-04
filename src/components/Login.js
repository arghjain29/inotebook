import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate();
  const { showAlert } = props;
  const url = "https://inotebook-three-rho.vercel.app";
  const handlesubmit = async (e) => {
    
    e.preventDefault();
    const response = await fetch(`${url}/api/auth/login`, {
      method: 'POST',
      headers: {
        "content-type": 'application/json',
      },
      body: JSON.stringify({ email: e.target.email.value, password: e.target.password.value })
    });
    const json = await response.json();
    
    if (json.success) {
      localStorage.setItem('token', json.AuthTokken);
      console.log(json.AuthTokken);
      navigate('/'); // redirect to home page
      showAlert("Logged in successfully", "success");
    } else {
      showAlert(json.error, "danger");
    }

  }
     


  return (
    <div>

      <div className="d-flex">
        <h2>LOGIN HERE ...</h2>
      </div>

      <form  onSubmit={handlesubmit} >
        <div className="mb-3 mt-3 ">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' id="password" />
        </div>
        
        <button type="submit" className="btn btn-primary">Submit</button>

      </form>
    </div>

  )
}

export default Login
