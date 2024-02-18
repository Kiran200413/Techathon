import React from 'react';
import Footer from './Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Medical from './Medical';
import Navbar1 from './Navbar1';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Engineering from './Engineering';
import Agriculture from './Agriculture';
import ComputerScience from './ComputerScience';
import Frontend from './Frontend';
import Notes from './Notes';

import Quiz from './Quiz';
import Exam from './Exam';

import Certificate from './Certificate';

const App = () => {
 
  return (
    <BrowserRouter>
       <Navbar1  />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cs-it" element={<ComputerScience />} />
        <Route path="/frontend" element={<Frontend />} />
        
        <Route path="/quiz" element={<Quiz  />} />
        <Route path="/certificate" element={<Certificate  />} />
        <Route path="/exam" element={<Exam/>} />
        <Route path="/notes" element={<Notes/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
