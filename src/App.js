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
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
