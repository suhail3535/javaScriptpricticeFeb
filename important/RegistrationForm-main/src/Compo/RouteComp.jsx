import React from 'react'
import { Routes,Route } from 'react-router-dom';
const RouteComp = () => {
  return (
    <>
      
      <Routes>
      
      <Route  path='/home' element= {<Home/>}/>
      <Route  path='/contactUs' element={<ContactUs/> }/>
      <Route  path='/internsip' element={<Internsip/>}/>
      <Route  path='/services' element={<Services/>}/> 
      <Route  path='/registerbtn' element={<RegistrationForm/>}/>  
    </Routes> 
    </>
  )
}

export default RouteComp
