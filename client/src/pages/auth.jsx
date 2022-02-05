import * as React from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import {  teal } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ParticlesBackground from '../components/ParticlesBackground/ParticlesBackground';
import Login from '../components/login/login';
import Signup from '../components/signup/signup'


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

function LoginSignup() {  
  const [haveacc, sethaveacc] = React.useState(true);

  const handlehaveacctrue = () => {
    sethaveacc(true);
  };

  const handlehaveaccfalse = () => {
    sethaveacc(false);
  };
  return (
    <>
       <ParticlesBackground/>
       <div className='page'>
        <div className='logo'>
            <h1>
              MaileX
            </h1>
        </div>
        <div className='formdiv'>
          <div className='form'>
          {haveacc ? (
              <Login donthaveacc={handlehaveaccfalse}/>
              ):(
              <Signup haveacc={handlehaveacctrue}/>
              )}
          </div>
        </div>
       </div>
    </>
  );
}

export default LoginSignup;