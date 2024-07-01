import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const navigate = useNavigate();
  const { showAlert } = props;


  const handlesubmit = async (e) => {
    e.preventDefault();

    if (e.target.password.value !== e.target.Cpassword.value) {
      alert("Password does not match");
      return;
    }

    const response = await fetch(`http://localhost:5000/api/auth/createUser`, {
      method: 'POST',
      headers: {
        "content-type": 'application/json',
      },
      body: JSON.stringify({ name: e.target.name.value, email: e.target.email.value, password: e.target.Cpassword.value })
    });
    const json = await response.json();

    if (json.success) {
      localStorage.setItem('token', json.AuthTokken);
      navigate('/'); // redirect to home page
      showAlert("Account created successfully", "success");
    } else {
      showAlert(json.error, "danger");
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
