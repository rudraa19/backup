import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <details>
        <summary>C++</summary>
        <>
          <ul>
            <details>
              <summary>Easy</summary>
              
              <ul>1.1</ul>
              <ul>1.2</ul>
              <ul>1.3</ul>
              
            </details>
          </ul>
          <ul>chapter 2</ul>
          <ul>chapter 3</ul>
          <ul>chapter 4</ul>
        </>
      </details>
    </>
  )
}

export default App
