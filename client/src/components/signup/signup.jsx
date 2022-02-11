//From React
import {React, useState} from 'react'

//From Material UI
import { createTheme, ThemeProvider} from '@mui/material/styles';
import {  teal } from '@mui/material/colors';
import {Avatar, Button, Typography, FormHelperText, Container, CssBaseline, InputAdornment, Box, TextField, OutlinedInput} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

//From Apollo
import { useMutation } from '@apollo/client';

//From Utils
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



function Signup (props) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const addUser = useMutation(ADD_USER);

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
              onClick={props.haveacc}
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