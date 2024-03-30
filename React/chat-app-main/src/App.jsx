import React, { useEffect } from 'react'
import Login from './Components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Protected from './Components/Protected'

const App = () => {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <Protected>
            <Home />
          </Protected>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<div className='notFound' >
          <h1  >
            404 Not Found
          </h1>
        </div>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App