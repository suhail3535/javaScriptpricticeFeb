import React from 'react';
// Assuming Navbar is located in './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./component/Header"
import Home from "./views/Home.jsx"
import Table from "./component/Table.jsx"
import Experience from './Experience/Experience.jsx';
import It from './Experience/It.jsx';
import {Button} from 'primereact/button';
import BasicDemo from './views/Chart.jsx';
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



      <div className="card flex flex-wrap justify-content-center gap-3">
        <Button label="Primary" text />
        <Button label="Secondary" severity="secondary" text />
        <Button label="Success" severity="success" text />
        <Button label="Info" severity="info" text />
        <Button label="Warning" severity="warning" text />
        <Button label="Help" severity="help" text />
        <Button label="Danger" severity="danger" text />
      </div>


      <BasicDemo />
    </div>
  );
};

export default App;
