
import React from 'react'
import Navbar from './component/navbar/Navbar'
import Navbar2 from './component/navbar/Nav2'



import MainRoutes from './component/MainRoutes'
import Item from './component/items/Item'



const App = () => {
  return (
    <div>
    <Navbar/>



      <MainRoutes />
      <Item />

    </div>
  )
}

export default App
