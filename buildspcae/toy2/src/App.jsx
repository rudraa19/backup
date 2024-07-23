import { createContext, useState } from 'react';
import './App.css';
import Docs from './Components/Docs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

export const ThemeContext = createContext();

function App() {

  let size = 20;

  return (  
    <Router>
      <Routes>
        <Route path='/' element={<Layout size={size} />}>
          <Route path=':language/:name' element={<Docs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
