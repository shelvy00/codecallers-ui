import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

function TakeAQuiz() {
  
  return (
    <div>
      <h2>Take A Quiz</h2>
      <Button onClick={event =>  window.location.href='/quiz'}>Click Here for Quiz</Button> 
    </div>
  );
}

export default TakeAQuiz;