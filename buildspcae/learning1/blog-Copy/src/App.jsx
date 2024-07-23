import { createContext, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Post from './Components/Post'

export const ThemeContext = createContext();

function App() {

  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark, setIsDark
  }

  return (
    <ThemeContext.Provider value={value}>
      {/* <Header /> */}
      <div style={{float: 'left', width: '20%', backgroundColor: 'black', height: '100vh', position: 'fixed',}}> adf </div>
      <div style={{float: 'left', width: '55%', paddingLeft: 10, marginLeft: '21%'}}> 
        <Post />
      </div>
      <div className='sticker' style={{width: `${20}%`, backgroundColor: 'aqua', height: '100vh', marginLeft: '80%', position: 'fixed'}}>adsf</div>
      
    </ThemeContext.Provider>
  )
}

export default App
