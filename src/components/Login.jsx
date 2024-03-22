






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
      <TextField id="outlined-basic" label="Name" variant="outlined" 
        value={name}
        onChange={(event)=>setName(event.target.value)}
      />
      <TextField id="outlined-basic" label="Email" variant="outlined" 
      value={email}
      onChange={(event)=>setEmail(event.target.value)}
      />
      <TextField type= "password" id="outlined-password-input" label="Password" variant="outlined" 
      value={password}  
      onChange={(event)=>setPassword(event.target.value)}
      />
      <Button variant="contained" onClick={handleClick}>
        Submit
      </Button>
    </Box>
  );