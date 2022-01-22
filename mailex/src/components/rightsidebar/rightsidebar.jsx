import React from 'react';
import '../rightsidebar/rightsidebar.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  teal } from '@mui/material/colors';
import { useMediaQuery } from '@mui/material';



const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
  breakpoints: {
    values: {
      sm: 640,
      md: 1007,
      lg: 1280,
      xl: 1536,
    },
  },
});

var getInitials = function (string) {
  var names = string.split(' '),
      initials = names[0].substring(0, 1).toUpperCase();
  
  if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};


function Rightsidebar() {
  let contacts = ['Michael Scott', 'Jim Halpert', 'Pam Beesly', 'Stanley Hudson', 'Dwight Shrute', 'Merideth Palmer', 'Toby Flenderson', 'Angela Martin', 'Kevin Malone', 'Oscar Martinez', 'Robert California', 'Jan Levinson', 'Karen Fillippelli', 'Andy Bernard', 'Deangelo Viker', 'Jo Bennette']

  return (
    <ThemeProvider theme={theme}>
     <div className='rightsidebar'>
       <ul >
         {contacts.map((name , index) => (
           <li key={index}>
           <Button>
             <Avatar sx={{ 
              bgcolor: teal[900], fontSize:{md:15, lg:15}, height:{ md:30}, width:{ md:30}}}>{getInitials(name)}</Avatar>
             <p>
               {name}
             </p>
           </Button>
          </li>
         ))}
        </ul>
     </div>
     </ThemeProvider>
  );
}

export default Rightsidebar;