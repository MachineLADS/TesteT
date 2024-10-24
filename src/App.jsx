import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Receitas from '/Site/Receitas.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Receitas/>
    </>
  )
}

export default App
