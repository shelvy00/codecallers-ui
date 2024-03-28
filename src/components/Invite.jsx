import React, { useEffect, useState } from 'react';
import {Box, TextField, Stack, Button} from '@mui/material';

function Invite() {

  const[inviteEmail, setInviteEmail]=React.useState('');
  const[message, setMessage]=React.useState('Come join and check out this website!' + '\n[INSERT URL HERE]');


  const handleClick = (event) => {
    event.preventDefault()
    const invite = { inviteEmail, message };
    if (inviteEmail === '' || message === '') {
      alert("All fields are required!");
      event.preventDefault();
    } else if (message.length < 1) {
      alert("Please provide an invite message!");
      event.preventDefault();
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inviteEmail)) {
      alert("Invalid email address!");
      event.preventDefault();
    }
    else
      fetch("http://localhost:8080/Invite", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(invite)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          alert("Invite sent!");
          window.location.href = '/invite';
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
          alert("Error occurred while submitting the form. Please try again later.");
        });
  }
  
  
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 7, width: '40ch' },
    }}
    noValidate
    autoComplete="off"
    style={{border: '5px solid rgba(, 0, 0, 0.96)', padding: '50px', borderRadius: '25px'}}>
      <div>
        <h2>Invite</h2>
      </div>
      <div>
          <TextField id="inviteEmail" label="Email" variant="outlined"
            fullWidth 
            value={inviteEmail}
            onChange={(event)=>setInviteEmail(event.target.value)} 
            required
          />
      </div>
      <div>
          <TextField
            id="message"
            label="Message"
            multiline
            rows={5}
            
            value={message}
            fullWidth
            onChange={(event)=>setMessage(event.target.value)} 
          />
      </div>
      <div>
        <Button variant= "contained" onClick={handleClick}>
          Send Invite
        </Button> 
      </div>
    </Box>
  );
}

export default Invite;