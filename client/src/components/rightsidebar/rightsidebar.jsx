import React from 'react';
import '../rightsidebar/rightsidebar.css'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  teal } from '@mui/material/colors';
import { useMediaQuery } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import MenuIcon from '@mui/icons-material/Menu';
import PeopleIcon from '@mui/icons-material/People';

import { QUERY_INBOX, QUERY_PROFILE } from '../../utils/queries'
import { useQuery } from '@apollo/client';

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
  
  let allcontacts = []
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const { loading, data } = useQuery(QUERY_INBOX)

  const contact = data?.inbox || [];



  if (contact.length > 0) {
    for(let i = 0; i < contact.length; i++){
      allcontacts.push(`${contact[i].sender.firstName} ${contact[i].sender.lastName}`)
    }
  }
  
  let contacts = [...new Set(allcontacts)];


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
     <div className='rightsidebarmob'>
     <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, right:10 }}
        icon={<PeopleIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction='up'
      >
        {contacts.map((name, index) => (
          <SpeedDialAction
            key={index}
            icon={<Avatar sx={{ 
              bgcolor: teal[900], fontSize:{md:15, lg:15}, height:{ md:30}, width:{ md:30}}}>{getInitials(name)}</Avatar>}
            tooltipTitle={name}
            tooltipOpen
            onClick={handleClose}
            tooltipPlacement='left'

          />
        ))}
      </SpeedDial>
     </div>

     </ThemeProvider>
  );
}

export default Rightsidebar;