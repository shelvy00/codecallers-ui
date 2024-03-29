import React from 'react';
import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom'
import FetchQuizData from './components/FetchQuizData';
import { Login } from '@mui/icons-material';

import Users from './components/Users';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import Leaderboard from './components/Leaderboard';
import Contact from './components/Contact';
import Invite from './components/Invite';
import About from './components/About';
import TakeAQuiz from './components/TakeAQuiz';
import MyAccount from './components/MyAccount';
import EditAccount from './components/EditAccount';
import DeleteAccount from './components/DeleteAccount';
import LightDark from './components/LightDark';
import './Switch.css'

let username;

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<TakeAQuiz />} />
          <Route path="/quiz" element={<FetchQuizData />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myaccount/:username" element={<MyAccount />} />
          <Route path="/editaccount/:username" element={<EditAccount />} />
          <Route path="/deleteaccount/:username" element={<DeleteAccount />} />
        </Routes>
      </div>
    </>
  )

}

export default App