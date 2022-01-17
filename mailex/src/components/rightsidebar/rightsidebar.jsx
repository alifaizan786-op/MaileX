import React from 'react';
import '../rightsidebar/rightsidebar.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  teal } from '@mui/material/colors';


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

var getInitials = function (string) {
  var names = string.split(' '),
      initials = names[0].substring(0, 1).toUpperCase();
  
  if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};


function Rightsidebar() {
  let contacts = ['Breandan Perry', 'Michael Scott', 'Jim Halpert', 'Pam Beesly', 'Stanley Hudson', 'Dwight Shrute', 'Merideth Palmer', 'Toby Flenderson', 'Angela Martin', 'Kevin Malone', 'Oscar Martinez']

  return (
    <ThemeProvider theme={theme}>
     <div className='rightsidebar'>
       <ul>
         {contacts.map((contacts , index) => (
           <li key={index}>
           <Button>
             <Avatar sx={{ bgcolor: teal[500] }}>
               {getInitials(contacts)}
             </Avatar>
             <p>
               {contacts}
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