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
import { Link } from 'react-router-dom';
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

// var getInitials = function (string) {
//   var names = string.split(' '),
//       initials = names[0].substring(0, 1).toUpperCase();
  
//   if (names.length > 1) {
//       initials += names[names.length - 1].substring(0, 1).toUpperCase();
//   }
//   return initials;
// };


function Rightsidebar() {
  
  let allcontacts = []
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  

  const { loading, data } = useQuery(QUERY_INBOX)

  const contact = data?.inbox || [];



  if (contact.length > 0) {
    for(let i = 0; i < contact.length; i++){
      const obj = {
        fName : contact[i].sender.firstName,
        lName :contact[i].sender.lastName,
        _id: contact[i].sender._id
      }
      allcontacts.push(obj)
    }
  }
  
  let contactss = []
  let uniqueobj = {}

  for (let i in allcontacts){
    let objId = allcontacts[i]['_id']
    uniqueobj[objId] = allcontacts[i]
  }

  for (let i in uniqueobj){
    contactss.push(uniqueobj[i])
  }

  console.log(contactss);
  


  return (
    <ThemeProvider theme={theme}>
     <div className='rightsidebar' style={{ backgroundColor:'rgba(255,255,255,0.8)' }}>
       <ul >
         {contactss.map((contactobj) => (
           <Link  to={contactobj._id} key={contactobj._id}>
           <li >
           <Button>
             <Avatar sx={{ 
              bgcolor: teal[900], fontSize:{md:15, lg:15}, height:{ md:30}, width:{ md:30}}}>{`${contactobj.fName[0]}${contactobj.lName[0]}`}</Avatar>
             <p>
             {`${contactobj.fName} ${contactobj.lName}`}
             </p>
           </Button>
          </li>
          </Link>
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
        {contactss.map((contactobj) => (
          <SpeedDialAction
            key={contactobj._id}
            icon={<Avatar sx={{ 
              bgcolor: teal[900], fontSize:{md:15, lg:15}, height:{ md:30}, width:{ md:30}}}>{`${contactobj.fName[0]}${contactobj.lName[0]}`}</Avatar>}
            tooltipTitle={`${contactobj.fName} ${contactobj.lName}`}
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