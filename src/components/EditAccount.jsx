import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import {Button, TextField} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from "dayjs";

// need to run the following commands for dates to work:
// npm install @mui/x-date-pickers
// npm install dayjs
// npm install @mui/lab

function EditAccount() {

  let date;

  let userID;
  const { username } = useParams();
  const [users, setUsers] = useState([]);
  const[firstName, setFirstName]=React.useState('')
  const[lastName, setLastName]=React.useState('')
  const[birthday, setBirthday]=React.useState('')
  const[bio, setBio]=React.useState('')

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
    const user={firstName, lastName, birthday, bio}
    fetch(`http://localhost:8080/user/${userID}/update`, {
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
        alert("Account Updated!")
    }).then(event =>  window.location.href=`/myaccount/${username}`) // Redirects back to user's profile
    }

  return (
    <div>
      <h1>Edit {username}'s Account</h1>
      <TextField id="outlined-basic" label="First Name" variant="outlined" 
        value={firstName}
        onChange={(event)=>setFirstName(event.target.value)}
      />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" 
        value={lastName}
        onChange={(event)=>setLastName(event.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs} >
        <DatePicker label="Birthday" 
        value={date}
        onChange={date => setBirthday(date.format('MMM DD YYYY').toString())}
        />
      </LocalizationProvider>
      <TextField id="outlined-basic" label="Bio" variant="outlined" 
        value={bio}
        onChange={(event)=>setBio(event.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button >
    </div>
  );

}

export default EditAccount;