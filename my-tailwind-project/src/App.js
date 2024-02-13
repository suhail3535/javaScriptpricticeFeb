import React from 'react'

import Item from './component/items/Item'
import Navbar from './component/navbar/Navbar'
import MapComponent from './component/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Item />
      <MapComponent />
    </div>
  )
}

export default App
