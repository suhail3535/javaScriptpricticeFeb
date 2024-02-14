import React from 'react'

import Item from './component/items/Item'
import Navbar from './component/navbar/Navbar'
import MapComponent from './component/footer/Footer'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './views/login/Login'
import Navbar2 from './component/navbar/Nav2'
import GitHubCommitHistory from './component/items/Cal'
const App = () => {
  return (
    <div>
      {/* <Navbar /> */}

      {/* <ChakraProvider>
        <Item />
      </ChakraProvider>
      <MapComponent /> */}
      <Navbar2 />
      {/* <Login /> */}
      <GitHubCommitHistory />

    </div>
  )
}

export default App
