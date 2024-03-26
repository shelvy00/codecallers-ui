import React, { useEffect, useState } from 'react';
import { Button, Box, InputLabel, MenuItem, FormControl, Select, List } from '@mui/material';

function TakeAQuiz() {

  const [topic, setTopic] = React.useState('');
  const [difficultyOptions, setDifficultyOptions] = React.useState([]);
  const [difficulty, setDifficulty] = React.useState('');

  const updateTopicChange = (event) => {
    setTopic(event.target.value)
  
  };

  const updateDifficultyOptions = () => {
    if (topic === "javaScript"){
      setDifficultyOptions(["Easy"]);
    };
    if (topic === "html"){
      setDifficultyOptions(["Easy", "Medium", "Hard"]);
    };
  };

  const handleTopicChange = (event) => {
    updateTopicChange(event);
    updateDifficultyOptions();
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  return (
    <div style={{border: '5px solid rgba(0, 0, 0, 0.96)', padding: '50px', borderRadius: '25px'}}>
      <div>
        <h2>Select Your Quiz Preferences</h2>
      </div>
      <div>
        <Box sx={{ minWidth: 120 }} style={{margin : '5px'}}>
          <FormControl fullWidth>
            <InputLabel id="topic">Topic</InputLabel>
            <Select
              labelId="topic"
              id="topic"
              value={topic}
              label="Topic"
              onChange={handleTopicChange}
            >
              <MenuItem value={"javaScript"}>JavaScript</MenuItem>
              <MenuItem value={"html"}>HTML</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <div>
        <p>Selected Topic: {topic}</p>
        <p>Difficulty Options: {difficultyOptions}</p>
      </div>
       <div>
        <Box sx={{ minWidth: 120 }} style={{margin : '5px'}}>
          <FormControl fullWidth>
            <InputLabel id="difficulty">Difficulty</InputLabel>
            <Select
              labelId="difficulty"
              id="difficulty"
              value={difficulty}
              label="Difficulty"
              onChange={handleDifficultyChange}
            >
              <MenuItem value={"easy"}>{difficultyOptions[0]}</MenuItem>
              <MenuItem value={"medium"}>{difficultyOptions[1]}</MenuItem>
              <MenuItem value={"hard"}>{difficultyOptions[2]}</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      {/* <div>
        <Box sx={{ minWidth: 120 }} style={{margin : '5px'}}>
          <FormControl fullWidth>
            <InputLabel id="difficulty">Difficulty</InputLabel>
            <Select
              labelId="difficulty"
              id="difficulty"
              value={difficulty}
              label="Difficulty"
              onChange={handleDifficultyChange}
            >
              <MenuItem value={"easy"}>Easy</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"hard"}>Hard</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div> */}
      <div>
        <Button variant="contained" onClick={event =>  window.location.href=`/quiz/${topic}/${difficulty}`} style={{margin : '5px'}}>
          Go!
        </Button >
      </div>
    </div>
  );
}

export default TakeAQuiz;