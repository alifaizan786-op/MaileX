import React from 'react';
import '../leftsidebar/leftsidebar.css'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import StarIcon from '@mui/icons-material/Star';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import Button from '@mui/material/Button'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple, teal } from '@mui/material/colors';


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


function Leftsidebar() {
  return (
    <ThemeProvider theme={theme}>
     <div className='leftsidebar' >
       {/* inbox, starred, all, trash, spam */}
       <ul>
         <li>
          <Button><InboxIcon fontSize="medium"/>Inbox</Button>
         </li>
         <li>
         <Button><StarIcon fontSize="medium"/>Starred</Button>
         </li>
         <li>
         <Button><MailIcon fontSize="medium"/>All Mail</Button>
         </li>
         <li>
         <Button><DeleteIcon fontSize="medium"/>Trash</Button>
         </li>
         <li>
         <Button><AnnouncementIcon fontSize="medium"/>Spam</Button>
         </li>
       </ul>
     </div>
     </ThemeProvider>
  );
}

export default Leftsidebar;
// div className='leftsidebar'>
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </div>