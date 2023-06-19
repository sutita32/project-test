import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { pink } from '@mui/material/colors';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function UserCreate() {
    const handleSubmit = event => {
        event.preventDefault();
        var data = {
          'userId': userId,
          'title': title,
          'completed': completed,
        }
          
          fetch("https://jsonplaceholder.typicode.com/todos", {
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
  }
  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState('');



  const handleChange = (event) => {
    setCompleted(event.target.value);
  };

  const controlProps = (item) => ({
    checked: completed === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <Container sx={{ p:2 }} maxWidth="sm">    
      <div>
        <Typography component="h1" variant="h5">
          Create User
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{ pt:2 }} spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="userId"
                name="userId"
                variant="outlined"
                required
                fullWidth
                id="userId"
                label="UserId"
                onChange={(e) => setUserId(e.target.value)}
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Title"
                label="Details"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <FormControl item xs={14} sx={{ p:2 }}>
                <FormLabel id="demo-controlled-radio-buttons-group" >Status</FormLabel>
            <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                id="Status"
                onChange={(e) => setCompleted(e.target.value)}
            >

              <FormControlLabel value="end" control={<Radio {...controlProps('b')} color="success"/>} label="Success" />
              <FormControlLabel value="end" control={<Radio {...controlProps('c')}sx={{color: pink[800],'&.Mui-checked': {color: pink[600],}, }} />} label="Unsuccessful" />
              </RadioGroup>
            </FormControl>
      
            
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Create
            </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}

export default UserCreate