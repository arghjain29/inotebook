import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import About from './components/About';
import Home from './components/Home';
import Alert from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import UserInfo from './components/UserInfo';



function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route path="/" element=< Home showAlert={showAlert} /> />
              <Route path="/about" element=< About /> />
              <Route path="/login" element=< Login showAlert={showAlert} /> />
              <Route path="/signup" element=< Signup showAlert={showAlert} /> />
              <Route path="/userinfo" element=< UserInfo showAlert={showAlert} /> />

            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
