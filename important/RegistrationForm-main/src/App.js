import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Compo/Navbar';
import RegistrationForm from './Compo/RegistrationForm';
import { Routes, Route } from 'react-router-dom';
import Home from './Compo/Home';
import ContactUs from './Compo/ContactUs';
import Internsip from './Compo/Internsip';
import Services from './Compo/Services';
function App() {
  return (
    <div className="AppContainer">

      <div className='NavContainer'><Navbar /></div>
      <div className='MainContainer'>
        <Routes>

          <Route path='/home' element={<Home />} />
          <Route path='/contactUs' element={<RegistrationForm />} />
          <Route path='/internsip' element={<Internsip />} />
          <Route path='/services' element={<Services />} />
          <Route path='/registerbtn' element={<RegistrationForm />} />
        </Routes>
      </div>


    </div>
  );
}

export default App;
