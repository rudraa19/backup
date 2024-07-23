import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{fontFamily:"Arial"}}>Contributors</h1>
      <hr />
      <br />
      <Card name="rudraa19"/>
      <Card name="hiteshchoudhary"/>
      <Card name="nwaliaez"/>
      <Card name="srushtisoni08"/>
      <Card />
    </>
  )
}

export default App
