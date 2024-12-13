import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Badge from "./Badge"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Badges</h1>
      <h2>Square</h2>
      <div className="badges-container">
      <Badge shape="square">Badge</Badge>
      <Badge shape="square" color="green">Badge</Badge>
      <Badge shape="square" color="yellow">Badge</Badge>
      <Badge shape="square" color="red">Badge</Badge>
      <Badge shape="square" color="blue">Badge</Badge>
      <Badge shape="square" color="indigo">Badge</Badge>
      <Badge shape="square" color="purple">Badge</Badge>
      <Badge shape="square" color="pink">Badge</Badge>
      </div>
      <h2>Pill</h2>
      <div className="badges-container">
      <Badge shape="pill">Badge</Badge>
      <Badge shape="pill" color="green">Badge</Badge>
      <Badge shape="pill" color="yellow">Badge</Badge>
      <Badge shape="pill" color="red">Badge</Badge>
      <Badge shape="pill" color="blue">Badge</Badge>
      <Badge shape="pill" color="indigo">Badge</Badge>
      <Badge shape="pill" color="purple">Badge</Badge>
      <Badge shape="pill" color="pink">Badge</Badge>
      </div>
    </>
  )
}

export default App
