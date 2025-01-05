import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  let location = useLocation();
  let navigate = useNavigate();

  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >I-Notebook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} >About</Link>
              </li>
            </ul>
            <form className="d-flex">
              {!localStorage.getItem('token') ? (
                <>
                  <Link className="btn btn-outline-primary mx-2" role='button' to='/signup'>SignUp</Link>
                  <Link className="btn btn-outline-primary" role='button' to='/login'>Login</Link>
                </>
              ) : (<>
                <Link className="btn btn-outline-primary mx-2" role='button' to='/userinfo'>User Account</Link>
                <button className="btn btn-outline-primary" onClick={handlelogout}>Logout</button>
                </>)}
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

