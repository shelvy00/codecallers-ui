import * as React from 'react';
import {Box, TextField, Stack, Button} from '@mui/material';
import { Password } from '@mui/icons-material';


export default function CreateAccount() {
  const[firstName, setFirstName]=React.useState('')
  const[lastName, setLastName]=React.useState('')
  const[username, setUsername]=React.useState('')
  const[email, setEmail]=React.useState('')
  const[password, setPassword]=React.useState('')
  const[verifyPassword, setVerifyPassword]=React.useState('')

  // Function that handles what happens when "Submit" gets clicked
  const handleClick=(event)=>{
    event.preventDefault()
    const user={firstName, lastName, username, email, password}
    console.log(user)
    fetch("http://localhost:8080/user/create", {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
        alert("New Account Created!")
    }).then(event =>  window.location.href='/users') // Redirects to a list of users
    }
  

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Create Account</h1>
      <TextField id="outlined-basic" label="First Name" variant="outlined" 
        value={firstName}
        onChange={(event)=>setFirstName(event.target.value)}
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" 
        value={lastName}
        onChange={(event)=>setLastName(event.target.value)}
      />
      <TextField id="outlined-basic" label="Username" variant="outlined" 
        value={username}
        onChange={(event)=>setUsername(event.target.value)}
      />
      <TextField id="outlined-basic" label="Email" variant="outlined" 
        value={email}
        onChange={(event)=>setEmail(event.target.value)}
      />
      <TextField type= "password" id="outlined-password-input" label="Password" variant="outlined" 
        value={password}  
        onChange={(event)=>setPassword(event.target.value)}
      />
      <TextField type= "password" id="outlined-password-input" label="Confirm Password" variant="outlined" 
        value={verifyPassword}  
        onChange={(event)=>setVerifyPassword(event.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>
    </Box>
  );
}