import React, { useEffect, useState } from 'react';
import {Box, TextField, Stack, Button} from '@mui/material';

function Invite() {

  const[inviteEmail, setInviteEmail]=React.useState('')
  const[message, setMessage]=React.useState('')
  
  
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
            required
          />
      </div>
      <div>
        <Button variant="outlined">Send Invite</Button> 
      </div>
    </Box>
  );
}

export default Invite;