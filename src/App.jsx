import React from 'react';
import { useState, useEffect  } from 'react'
import './App.css'
import FetchQuizData from './components/FetchQuizData';
import PersistentDrawerLeft from './components/NavBar';

import { Route,Routes } from 'react-router-dom'
import Users from './components/Users';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import { Login } from '@mui/icons-material';
import Leaderboard from './components/Leaderboard';
import Contact from './components/Contact';
import Invite from './components/Invite';
import About from './components/About';
import TakeAQuiz from './components/TakeAQuiz';

function App() {

  return (
   <>
      <div>
        <PersistentDrawerLeft/>
        <Routes>        
          <Route path="/"  element={<Home/>}/>   
          <Route path="/quizzes"  element={<TakeAQuiz/>}/>   
          <Route path="/quiz"  element={<FetchQuizData/>}/>   
          <Route path="/leaderboard"  element={<Leaderboard/>}/>   
          <Route path="/contact"  element={<Contact/>}/>   
          <Route path="/invite"  element={<Invite/>}/>   
          <Route path="/about"  element={<About/>}/>   
          <Route path="/users"  element={<Users/>}/>      
          <Route path="/create"  element={<CreateAccount/>}/>      
          <Route path="/login"  element={<Login/>}/>
        </Routes>
      </div>
   </>
  )
  
}

export default App