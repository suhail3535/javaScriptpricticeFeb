
import React from 'react'
import Navbar from './component/navbar/Navbar'
import Navbar2 from './component/navbar/Nav2'
import Login from './views/login/Login'
import JoinOurTeam from './views/login/Form'
import Item from './component/items/Item'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Navbar2 /> */}
      {/* <JoinOurTeam /> */}
      {/* <Login /> */}
      <ChakraProvider>   <Item /></ChakraProvider>

    </div>
  )
}

export default App
