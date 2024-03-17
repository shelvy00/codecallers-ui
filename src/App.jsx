import React from 'react';
import { useState, useEffect  } from 'react'
import './App.css'
import FetchQuizData from './components/FetchQuizData';
import PersistentDrawerLeft from './components/NavBar';

import { Route,Routes } from 'react-router-dom'
import Users from './components/Users';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';

function App() {

  return (
   <>
      <div>
	      {/* <Appbar /> */}
        <PersistentDrawerLeft/>
        <Routes>        
          <Route path="/"  element={<Home/>}/>
        </Routes>
        <Routes>        
          <Route path="/quiz"  element={<FetchQuizData/>}/>
        </Routes>
        <Routes>        
          <Route path="/users"  element={<Users/>}/>
        </Routes>
        <Routes>        
          <Route path="/create"  element={<CreateAccount/>}/>
        </Routes>
      </div>
   </>
  )
  
}

export default App