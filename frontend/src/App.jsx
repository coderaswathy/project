import { Routes, Route } from 'react-router-dom';

import Container from "react-bootstrap/Container";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';


export default function App() {
  return (
    <div>
      <Navbar />
      <Container>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />


    
       </Routes>

      </Container>
    </div>
  );
}

