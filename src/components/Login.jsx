import React, { useState } from 'react';

import { useAuth } from './AuthProvider';

import '../App.css';

export default function Login(){
  const [input, setUsername] = useState({
    username: "",
    password: "",
  });

  const auth = useAuth();
  const handleClick = (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      auth.loginAction(input);
      return;
    }





  return (
    <div>
    <form onSubmit={handleClick}>
      <input
        className="inputBox"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='button' type="submit">Login</button>
    </form>
    </div>
  );
  };
};