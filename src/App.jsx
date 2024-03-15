import { useState, useEffect  } from 'react'
import './App.css'
import FetchQuizData from './components/Fetch';
import PersistentDrawerLeft from './components/NavBar';

function App() {

  return (
   <>
      <div>
	      {/* <Appbar /> */}
        <PersistentDrawerLeft/>
        <FetchQuizData/>
      </div>
   </>
  )
  
}

export default App