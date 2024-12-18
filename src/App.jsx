
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Component/Home'; 
import Aboutus from './Component/Aboutus'; 
import Contact from './Component/Contact'; 

import Index from './Component/Index';

import DetailRecepies from './Component/DetailRecepies';
import Recepies from "./Component/Recepies"; // Correct relative import


const App = () => {
  return (
    <Router>
      
      
      <Routes>
        <Route path="/" element={<Index/>} />
       <Route path="/Aboutus" element={<Aboutus/>}/>
       <Route path="/Contact" element={<Contact/>} />
       <Route path="/DetailRecepies/:id" element={<DetailRecepies/>}/>
       <Route path="/Recepies" element={<Recepies />} />
        

      </Routes>
    </Router>
    
  );
};

export default App;

