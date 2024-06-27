import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NoteState from './context/notes/NoteState';
import About from './components/About';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/about" element= <About/> />
          </Routes>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
