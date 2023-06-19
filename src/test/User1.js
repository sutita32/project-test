import React, {useEffect,useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ButtonGroup from '@mui/material/ButtonGroup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';


import Link from '@mui/material/Link';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';


function User1() {
    const [items, setItems] = useState([]);
    const [iitems, setiitems] = useState();
    const [itemss, setItemss] = useState('');

    const handleChange = (event) => {
        if(event.target.value === "all"){
            setiitems(items);
        }
        else{
            let x = items.filter((obj) => obj.userId == event.target.value)
            setiitems(x);
        }
        setItemss(event.target.value);
  };

    useEffect(() => {
        UsersGet()
      }, [])
      
      const UsersGet = () => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then(res => res.json())
          .then(
            (result) => {
                setItems(result)
            }
          )
      }
    

    const UpdateUser = id => {
        window.location = '/update/'+id
      }
    
      const UserDelete = id => {
        var data = {
          'id': id
        }



      var requestOptions = {
        method: 'DELETE',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      
      fetch("https://jsonplaceholder.typicode.com/1", requestOptions)
      
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2}}>
        <Paper  sx={{ p: 2}}>
            <Box display="flex">
                <Box sx={{flexGrow: 1 }} >
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                
                    <InputLabel id="demo-select-small-label">Userid</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={itemss}
                        label="Userid"
                        onChange={handleChange}
                    >
                        <MenuItem value="all"><em>All</em></MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                    </Select>
                    
                    </FormControl>
                </Box>
                <Link href="create">
                    <Button Button variant="contained">Create</Button>
                </Link>
            </Box>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>UserId</TableCell>
            <TableCell align="left">Details</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="center">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            {iitems ? iitems.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userId}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell> 
              <TableCell align="left">{row.completed === true ? <Button variant="contained" color="success"> Success </Button> 
                  : 
                  <Button variant="outlined" color="error">
                  Unsuccessful</Button>}</TableCell>
            <TableCell align="center">
                      <ButtonGroup variant="outlined" aria-label="outlined button group">
                          <Button><EditOutlinedIcon/></Button>
                          <Button><DeleteOutlineOutlinedIcon/></Button>
                      </ButtonGroup>
                  </TableCell>
            </TableRow>
          )):items.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                  <TableCell component="th" scope="row">
                      {row.userId}
                  </TableCell>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="left">{row.completed === true ? <Button variant="contained" color="success"> Success </Button> 
                  : <Button variant="outlined" color="error">
                  Unsuccessful</Button>}</TableCell>
                  <TableCell align="center">
                      <ButtonGroup variant="outlined" aria-label="outlined button group">
                          <Button onClick={() => UpdateUser(row.id)}><EditOutlinedIcon/></Button>
                          <Button onClick={() => UserDelete(row.id)}><DeleteOutlineOutlinedIcon/></Button>
                      </ButtonGroup>
                  </TableCell>
              </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  )

  }
export default User1