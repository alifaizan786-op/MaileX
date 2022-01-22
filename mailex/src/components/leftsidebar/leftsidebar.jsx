import React from 'react';
import '../leftsidebar/leftsidebar.css'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import {  teal } from '@mui/material/colors';
import MenuIcon from '@mui/icons-material/Menu';


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

const menu = [
  {
    icon: <InboxIcon fontSize="large" sx={{ color: teal[900]}}/>,
    name: 'Inbox'
  },
  {
    icon: <StarIcon fontSize="large" sx={{ color: teal[900]}}/>,
    name: 'Starred'
  },
  {
    icon: <DeleteIcon fontSize="large" sx={{ color: teal[900]}}/>,
    name: 'Trash'
  },
  {
    icon: <AnnouncementIcon fontSize="large" sx={{ color: teal[900]}}/>,
    name: 'Spam'
  },
]

function Leftsidebar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <ThemeProvider theme={theme}>
     <div className='leftsidebar' >
       {/* inbox, starred, all, trash, spam */}
       <ul>
         {menu.map((menu, index) => (
         <li key={index}>
          <Button fullWidth sx={{ justifyContent: 'flex-start', 
          width:200  }}>
              {menu.icon}
              <p>
                {menu.name}
              </p>
          </Button>
         </li>))}
       </ul>
     </div>
     <div className='leftsidebarmob' >
     <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: 'absolute', bottom: 16, left:10 }}
        icon={<MenuIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
        direction='up'
      >
        {menu.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
            tooltipPlacement='right'

          />
        ))}
      </SpeedDial>
          
     </div>
     </ThemeProvider>
  );
}

export default Leftsidebar;