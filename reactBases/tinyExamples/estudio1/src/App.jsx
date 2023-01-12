import { useState } from 'react'
import './App.css'
import { BoxColor } from './components/BoxColor'
import { ConfigColor } from './components/ConfigColor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ConfigColor />
    </>
  )
}

export default App
