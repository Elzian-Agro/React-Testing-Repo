import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Edit from "./page/Edit";
import Delete from "./page/Delete";
import View from "./page/View";
import Home from "./page/Home";

import React from 'react';
import './App.css';
import Navbar from './NavbarMain/Navbar';

import Main from './page/Main';
import About from './page/about';
import Details from './page/details';

import Contact from './page/Contact';
  

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/main' element={<Main />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        
        <Route path='/details' element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/delete/:id" element={<Delete />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
