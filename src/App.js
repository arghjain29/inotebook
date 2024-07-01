import './App.css';
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



function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert message="hello"/>
          <div className="container">
            <Routes>
              <Route path="/" element= < Home/> />
              <Route path="/about" element= < About /> />
              <Route path="/login" element= < Login />  />
              <Route path="/signup" element= < Signup />  />

            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
