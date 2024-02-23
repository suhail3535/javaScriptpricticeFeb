import React, { useState } from 'react'
import axios from 'axios'
// import Item from './component/items/Item'
import Navbar from './component/navbar/Navbar'
import MapComponent from './component/footer/Footer'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './views/login/Login'
import Navbar2 from './component/navbar/Nav2'
import GitHubCommitHistory from './component/items/Cal'
import { Card } from './Card'
import JoinOurTeam from './Form'
import Item from './component/items/Item'
// import axios from 'axios'
const App = () => {
  const [item, setItem] = useState([])
  const getData = async () => {
    try {
      let res = await axios.get("https://jsonplaceholder.typicode.com/todos")
      console.log(res.data)
      setItem(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  getData()

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

      {/* <ChakraProvider>
        <JoinOurTeam />
      </ChakraProvider> */}
      {/* <Item /> */}
<div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:"20px"}}>
      {item.map((ele) => {
        return <div style={{border:"2px solid green",padding:"20px"}}>
          <p>{ele.userId}</p>
          <p>{ele.id}</p>
          <p>{ele.title}</p>
          <p>{ele.completed}</p>
        </div>
      })}
      </div>
    </div>
  )
}

export default App
