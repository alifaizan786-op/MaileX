import {React, useState} from 'react'
import '../rightsidebar/rightsidebar.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import {  teal } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import './signup.css'
import FormHelperText from "@mui/material/FormHelperText";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import OutlinedInput from "@mui/material/OutlinedInput";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';


const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});



function Signup () {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1, mb: 5 }}>
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="fName"
              label="First Name"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              autoComplete="First Name"
              autoFocus
              sx={{ mt: 2, mb: 1 }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lName"
              label="Last Name"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              autoComplete="Last Name"
              autoFocus
              sx={{ mt: 2, mb: 2 }}
            />
            <OutlinedInput
              sx={{ mt: 2}}
              endAdornment={<InputAdornment position="start">@mail-ex.com</InputAdornment>}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              autoComplete="Email"
              autoFocus
            />
            <FormHelperText id="outlined-weight-helper-text" sx={{mb: 2 }}>
            Username
          </FormHelperText>
            <TextField
              sx={{ mt: 0, mb: 2 }}
              margin="normal"
              required
              fullWidth
              name="password"
              value={formState.password}
              onChange={handleChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3}}
              onClick={handleFormSubmit}
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              href='/auth/login'
            >
              I have a Account! Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
  )
}



export default Signup;