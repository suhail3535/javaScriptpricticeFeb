import React from 'react'

import Item from './component/items/Item'
import Navbar from './component/navbar/Navbar'
import MapComponent from './component/footer/Footer'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './views/login/Login'
import Navbar2 from './component/navbar/Nav2'
import GitHubCommitHistory from './component/items/Cal'
import {Card} from './Card'
import JoinOurTeam from './Form'
const App = () => {

  return (
    <div>
      <Navbar />
      {/* <Card name="pooja kumari" city="jaipur" />
      <Card name="sara kumari" city="lucknow" />
      <Card name="moona kumari" city="karooli"/>
      <Card name="sunny kumari"  city="usa"/>
      <Card name="mohit"  city="usa"/>
      <Card name="sitaram "  city="usa"/>
      <Card name="mukesh " city="usa" /> */}
      {/* <Card name="sara kumari" city="lucknow" />
      <Card name="moona kumari" city="karooli" />
      <Card name="sunny kumari" city="usa" />
      <Card name="mohit" city="usa" />
      <Card name="sitaram " city="usa" />
      <Card name="mukesh " city="usa" /> */}


      {/* <Navbar2 /> */}
      {/* <Login /> */}
      {/* <GitHubCommitHistory /> */}

      {/* <h1>hello manish</h1> */}

      <ChakraProvider>
        <JoinOurTeam />
      </ChakraProvider>
    </div>
  )
}

export default App
