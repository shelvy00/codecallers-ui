import React, { useEffect, useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Button, Box, InputLabel, MenuItem, FormControl, Select, List } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Slider, Sketch, Material, Colorful, Compact, Circle, Wheel, Block, Github, Chrome } from '@uiw/react-color';
import { Alpha, Hue, ShadeSlider, Saturation, hsvaToHslaString } from '@uiw/react-color';
import { EditableInput, EditableInputRGBA, EditableInputHSLA } from '@uiw/react-color';
import {useParams } from 'react-router-dom';


// Need to run the following command for the color picker to work:
// npm i @uiw/react-color


function ProfilePicSelector() {

  let userID;
  let firstName;
  let lastName;
  let birthday;
  let bio;
  let user = {};
  const [users, setUsers] = useState([]);
  const { username } = useParams();
  const facialExpressions = ['frown', 'laughing', 'nervous', 'pucker', 'sad', 'smile', 'smirk', 'surprised']
  const hairStyles = ['dannyPhantom', 'dougFunny', 'fonze', 'full', 'mrClean', 'mrT', 'pixie', 'turban']
  const eyesStyles = ['eyes', 'eyesShadow', 'round', 'smiling', 'smilingShadow']
  const[facialExpression, setFacialExpression] = useState('laughing');
  const[hairStyle, sethairStyle] = useState('mrClean');
  const[eyes, setEyes] = useState('round');
  const[skinTone, setSkinTone] = useState('');
  const[hairColor, setHairColor] = useState('');
  const[shirtColor, setShirtColor] = useState('');
  let profilePic = `https://api.dicebear.com/8.x/micah/svg?baseColor=${skinTone}&hairColor=${hairColor}&shirtColor=${shirtColor}&mouth=${facialExpression}&hair=${hairStyle},&eyes=${eyes}`;

  let hex;
  let facialOptions;
  let hairStyleOptions
  let eyesOptions;

  useEffect(() => {
    fetch('http://localhost:8080/user/index')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  for ( let i = 0; i < users.length; i++ ){
    if(users[i].username === username){
      userID = users[i].id;
    }
  };

  const handleClick=(event)=>{
    event.preventDefault()
    const user={profilePic}
    fetch(`http://localhost:8080/user/${userID}/update`, {
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
        alert(`Profile Pic: ${profilePic}`)
    }).then(event =>  window.location.href=`/myaccount/${username}`) // Redirects back to user's profile
    }

  const handleSetSkinTone = (event) => {
    setSkinTone(event.target.value);
  };

  const handleFacialExpressionChange = (event) => {
    setFacialExpression(event.target.value);
  };

  const handleHairStyleChange = (event) => {
    sethairStyle(event.target.value);
  };

  const handleEyesChange = (event) => {
    setEyes(event.target.value);
  };

  if (facialExpression) { 
    facialOptions = facialExpressions.map((el) => <div key={el} ><Button variant="contained" value={el} onClick={handleFacialExpressionChange} style={{margin : '5px'}}>{el}</Button></div>); 
  } 

  if (hairStyle) { 
    hairStyleOptions = hairStyles.map((el) => <div key={el} ><Button variant="contained" value={el} onClick={handleHairStyleChange} style={{margin : '5px'}}>{el}</Button></div>); 
  } 

  if (eyes) { 
    eyesOptions = eyesStyles.map((el) => <div key={el} ><Button variant="contained" value={el} onClick={handleEyesChange} style={{margin : '5px'}}>{el}</Button></div>); 
  } 

  return (
    <div style={{border: '5px solid rgba(0, 0, 0, 0.96)', padding: '50px', borderRadius: '25px'}}>
      <h2>{username}'s<br></br>Profile Pic</h2>
      <div>
        <img
        src={profilePic}
        alt="avatar"
        />    
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            style={{backgroundColor: '#'+skinTone}}
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Skin Tone</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Sketch
                style={{ marginLeft: 20 }}
                color={hex}
                onChange={(color) => {
                  setSkinTone(color.hex.replace('#', ''));
                }}
              />
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            style={{backgroundColor: '#'+hairColor}}
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Hair Color</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Sketch
                style={{ marginLeft: 20 }}
                color={hex}
                onChange={(color) => {
                  setHairColor(color.hex.replace('#', ''));
                }}
              />
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            style={{backgroundColor: '#'+shirtColor}}
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Shirt Color</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Sketch
                style={{ marginLeft: 20 }}
                color={hex}
                onChange={(color) => {
                  setShirtColor(color.hex.replace('#', ''));
                }}
              />
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="facialExpression"
            value={facialExpression}
          >
            <Typography>Facial Expression</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {facialOptions}
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="hairStyle"
            value={hairStyle}
          >
            <Typography>Hair Style</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {hairStyleOptions}
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ArrowDownwardIcon />}
            aria-controls="panel1-content"
            id="eyes"
            value={eyes}
          >
            <Typography>Eyes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {eyesOptions}
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Button variant="contained" onClick={handleClick} style={{margin : '5px'}}>
          Accept
        </Button >
        <Button variant="contained" onClick={event =>  window.location.href=`/myaccount/${username}`} style={{margin : '5px'}}>
          Cancel
        </Button >
      </div>
    </div>
  );
}

export default ProfilePicSelector;