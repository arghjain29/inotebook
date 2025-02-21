import React from 'react'
import { useNavigate } from 'react-router-dom';


const Signup = (props) => {
  const navigate = useNavigate();
  const { showAlert } = props;
  const url = process.env.REACT_APP_BACKEND_URL;


  const handlesubmit = async (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.Cpassword.value) {
      alert("Password does not match");
      return;
    }
    if (!url) {
      console.error('Backend URL is not defined!');
    }

    try {
      const response = await fetch(`${url}/api/auth/createUser`, {
        method: 'POST',
        headers: {
          "content-type": 'application/json',
        },
        body: JSON.stringify({ name: e.target.name.value, email: e.target.email.value, password: e.target.Cpassword.value })
      });
      if (!response.ok) {
        // Handle non-200 HTTP responses
        const text = await response.text();
        throw new Error(`Server Error: ${response.status} - ${text}`);
      }
      const json = await response.json();

      if (json.success) {
        localStorage.setItem('token', json.AuthTokken);
        navigate('/'); // redirect to home page
        showAlert("Account created successfully", "success");
      } else {
        showAlert(json.error, "danger");
      }
    } catch (error) {
      console.error('Error:', error); 
    }
  }
  return (
      <div>
        <div className="d-flex">
          <h2>SIGN UP HERE ...</h2>
        </div>

        <form onSubmit={handlesubmit} >
          <div className="mb-3 mt-3 ">
            <label htmlFor="name" className="form-label">User Name</label>
            <input required type="text" className="form-control" id="name" name='name' aria-describedby="text" />
          </div>
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label">Email address</label>
            <input required type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input required type="password" className="form-control" name='password' minLength={5} id="password" />
          </div>
          <div className="mb-3">
            <label htmlFor="Cpassword" className="form-label">Confirm Password</label>
            <input required type="password" className="form-control" name='Cpassword' minLength={5} id="Cpassword" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>

        </form>
      </div>
    )
  }

  export default Signup
