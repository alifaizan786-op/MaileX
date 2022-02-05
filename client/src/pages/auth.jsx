import * as React from 'react'
import { createTheme, ThemeProvider} from '@mui/material/styles';
import {  teal } from '@mui/material/colors';
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