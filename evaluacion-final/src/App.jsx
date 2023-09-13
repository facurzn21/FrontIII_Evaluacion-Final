import { useState } from 'react'
import './App.css'
import Example from './components/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Example/>
    </>
  )
}

export default App
