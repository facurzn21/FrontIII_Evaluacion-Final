import { useState } from 'react'
import './App.css'
import Cards from './components/Card'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cards/>
    </>
  )
}

export default App
