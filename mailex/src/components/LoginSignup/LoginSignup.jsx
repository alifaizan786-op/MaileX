import {React, useState} from 'react';
import '../rightsidebar/rightsidebar.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import {  teal } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import './LoginSignup.css'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';



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


function Login (haveAccount, setHaveAccount) {
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
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1, mb: 5 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3}}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setHaveAccount(!haveAccount)}
            >
              Don't Have A Account? Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
  )
}

function Signup (haveAccount, setHaveAccount) {
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
            Sign in
          </Typography>
          <Box component="form"  noValidate sx={{ mt: 1, mb: 5 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fName"
              label="First Name"
              name="First Name"
              autoComplete="First Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="lName"
              label="Last Name"
              name="Last Name"
              autoComplete="Last Name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3}}
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => setHaveAccount(haveAccount)}
            >
              I have a Account! Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
  )
}


function LoginSignup() {
  const [ haveAccount, setHaveAccount]  = useState(true)
 

  
  const renderForm = () =>{
    if (haveAccount){
      return <Login handleFormChange={setHaveAccount} haveAccount={haveAccount}/>
    }
    else {
      return <Signup handleFormChange={setHaveAccount} haveAccount={haveAccount}/>
    }
  }

  
  return (
    <div>
       <ParticlesBackground/>
       <div className='page'>
        <div className='logo'>
            <h1>
              MaileX
            </h1>
        </div>
        <div className='formdiv'>
          <div className='form'>
            {renderForm()}
          </div>
        </div>
       
       </div>
    </div>
  );
}

export default LoginSignup;