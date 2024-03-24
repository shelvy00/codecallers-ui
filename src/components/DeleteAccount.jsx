import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import {Button, TextField} from '@mui/material';

function DeleteAccount() {

  let date;

  let userID;
  const { username } = useParams();
  const [users, setUsers] = useState([]);

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

  const handleDoNotDelete=(event)=>{
    event.preventDefault()
    const user = username
    fetch(`http://localhost:8080/user/${userID}/update`, {
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
        alert("We're happy you stayed!")
    }).then(event =>  window.location.href=`/myaccount/${username}`) // Redirects back to user's profile
    }


  const handleDelete=(event)=>{
    event.preventDefault()
    const user = username
    fetch(`http://localhost:8080/user/${userID}/delete`, {
      method:"DELETE",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
    }).then(()=>{
        alert("Account Deleted!")
    }).then(event =>  window.location.href=`/create`) // Redirects back to user's profile
    }

  return (
    <div>
      <h1>Are you REALLY REALLY sure you want to delete {username}'s Account?</h1>
      <p>This action cannot be undone!</p>

      <Button variant="contained" onClick={event =>  window.location.href=`/myaccount/${username}`}>
        No, wait! I'm having second thoughts! Get me outta here!
      </Button >

      <Button variant="contained" onClick={handleDelete}>
        Yes, I'm sure, delete my account!
      </Button >

    </div>
  );

}

export default DeleteAccount;