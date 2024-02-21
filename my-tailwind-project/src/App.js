import React from 'react'

import Item from './component/items/Item'
import Navbar from './component/navbar/Navbar'
import MapComponent from './component/footer/Footer'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './views/login/Login'
import Navbar2 from './component/navbar/Nav2'
import GitHubCommitHistory from './component/items/Cal'
import {Card} from './Card'
const App = () => {

  return (
    <div>
      <Navbar />
      <Card name="pooja kumari" city="jaipur" />
      <Card name="sara kumari" city="lucknow" />
      <Card name="moona kumari" city="karooli"/>
      <Card name="sunny kumari"  city="usa"/>

      {/* <Navbar2 /> */}
      {/* <Login /> */}
      {/* <GitHubCommitHistory /> */}

      <h1>hello manish</h1>
    </div>
  )
}

export default App
