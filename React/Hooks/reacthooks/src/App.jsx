import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Counter from './pages/Counter'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
      <hr />
      
    </>
  )
}

export default App
