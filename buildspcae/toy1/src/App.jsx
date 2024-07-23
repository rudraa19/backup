import { createContext, useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Post from './Components/Post'
import SidebarR from './Components/SidebarR'
import SidebarL from './Components/SidebarL'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout'
import Test from './Components/Test'

export const ThemeContext = createContext();

function App() {

  const [isDark, setIsDark] = useState(true);

  const value = {
    isDark, setIsDark
  }

  let size = 20;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout size={size} />}>
        <Route path=':name' element={<Post />}/>
      </Route>
    )
  )

  return (  
      <RouterProvider router={router}/>
    
  )
}

export default App
