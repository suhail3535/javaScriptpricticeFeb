import React from 'react';
// Assuming Navbar is located in './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Header"
import Home from "./views/Home.jsx"
import Table from "./component/Table.jsx"
import Experience from './Experience/Experience.jsx';
import It from './Experience/It.jsx';
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/table" element={<Table />} /> */}
          <Route path="/exp" element={<Experience />} />
          {/* <Route path="/pro" element={<It />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
