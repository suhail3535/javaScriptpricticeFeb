
import React from 'react'
import Navbar from './component/navbar/Navbar'
import Navbar2 from './component/navbar/Nav2'
import Login from './views/login/Login'
import JoinOurTeam from './views/login/Form'
import Item from './component/items/Item'
import { ChakraProvider } from '@chakra-ui/react'
import MainRoutes from './component/MainRoutes'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Navbar2 /> */}
      {/* <JoinOurTeam /> */}
      {/* <Login /> */}
      {/* <Item /> */}
      {/* <div className='w-1/2 border-2 border-green-400 m-auto mt-4 text-center o'>
        <div className='overflow-hidden border-2 border-yellow-300'>
          <img className='  md:hover:scale-105 transition-all ease-in-out duration-1000 translate-x-4 cursor-pointer  w-full border border-red-300 m-auto' src="https://vermillion-cendol-8a7209.netlify.app/Images/mainlogo.jpeg" alt="" />
        </div>
        <h1>hello world</h1>
        <p>mens product</p>
        <h2>nike</h2>
      </div> */}
      <MainRoutes />
    </div>
  )
}

export default App
