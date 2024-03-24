import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import Button from '@mui/material/Button';



function MyAccount() {

  let user = {};
  const [users, setUsers] = useState([]);
  const { username } = useParams();

  useEffect(() => {
    fetch('http://localhost:8080/user/index')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  for ( let i = 0; i < users.length; i++ ){
    if(users[i].username === username){
      user = users[i];
    }
  };


  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <p>Name: {user.firstName} {user.lastName}</p>
      <p>Current Score: {user.score}</p>
      <p>Birthday: {user.birthday}</p>
      <p>Bio: {user.bio}</p>
      <Button variant="contained" onClick={event =>  window.location.href=`/editaccount/${username}`}>
        Edit Profile
      </Button >
      <Button variant="contained" onClick={event =>  window.location.href=`/deleteaccount/${username}`}>
        Delete Profile
      </Button>
    </div>
  );

}

export default MyAccount;