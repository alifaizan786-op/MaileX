import React from 'react';
import Header from '../components/header/Header';
import Leftsidebar from '../components/leftsidebar/leftsidebar';
import Rightsidebar from '../components/rightsidebar/rightsidebar';
import Post from '../components/post/Post'
import '../components/rightsidebar/rightsidebar.css'
import { Grid } from '@mui/material';

const emails = [
  {
    sender: {
      firstName: "Michael",
      lastName: "Scott",
      email: "m.scott@mailex.com"
    },
    subject: "Introduction",
    emailbody: "Hi, I am Michael Scott",
    sentDate: "Feb 3rd, 2022 at 1:02 am"
  },
  {
    sender: {
      firstName: "Jim",
      lastName: "Halpert",
      email: "j.halpert@mailex.com"
    },
    subject: "Introduction",
    emailbody: "Hey, I am Jim. Nice to meet you",
    sentDate: "Feb 3rd, 2022 at 1:02 am"
  },
  {
    sender: {
      firstName: "Michael",
      lastName: "Scott",
      email: "m.scott@mailex.com"
    },
    subject: "Introduction",
    emailbody: "Nice to meet you to Jim",
    sentDate: "Feb 3rd, 2022 at 1:02 am"
  },
  {
    sender: {
      firstName: "Pam",
      lastName: "Beesly",
      email: "p.beesly@mailex.com"
    },
    subject: "Introduction",
    emailbody: "Hi, I am Pam Beesly",
    sentDate: "Feb 3rd, 2022 at 1:02 am"
  },
  {
    sender: {
      firstName: "Jim",
      lastName: "Halpert",
      email: "j.halpert@mailex.com"
    },
    subject: "Introduction",
    emailbody: "Hi, I am Jim Halpert, Nice to meet you Pam",
    sentDate: "Feb 3rd, 2022 at 1:02 am"
  },
  {
    sender: {
      firstName: "Pam",
      lastName: "Beesly",
      email: "p.beesly@mailex.com"
    },
    subject: "Introduction",
    emailbody: "Nice to Meet you too, Jim",
    sentDate: "Feb 3rd, 2022 at 1:02 am"
  },
  {
    sender: {
      firstName: "Dwight",
      lastName: "Schrute",
      email: "d.schrute@mailex.com"
    },
    subject: "Introduction",
    emailbody: "Hi, I am Dwight Schrute, Owner Of A Beet Farm",
    sentDate: "Feb 3rd, 2022 at 1:02 am"
  },
  {
    sender: {
      firstName: "Pam",
      lastName: "Beesly",
      email: "p.beesly@mailex.com"
    },
    subject: "Introduction",
    emailbody: "Hey, I am Pam Beesly. Nice to meet you Dwight",
    sentDate: "Feb 3rd, 2022 at 1:02 am"
  },
  {
    sender: {
      firstName: "Dwight",
      lastName: "Schrute",
      email: "d.schrute@mailex.com"
    },
    subject: "Introduction",
    emailbody: "Get out of my inbox, peasant",
    sentDate: "Feb 3rd, 2022 at 1:02 am"
  }
]




function Home() {
  const [draweropen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };
  return (
    <div>
    <Grid container>
     <Header open={handleDrawerOpen} close={handleDrawerClose} current={draweropen}/>
     <Grid item sm={2} xs={2}>
       <Leftsidebar open={handleDrawerOpen} close={handleDrawerClose} current={draweropen}/>
     </Grid>
     <Grid item sm={7} xs={10} marginTop={"30px"} marginBottom={"30px"}>
       {emails.map((emailobj, index) => (
         <Post 
         senderfname={emailobj.sender.firstName} 
         senderlname={emailobj.sender.lastName} 
         senderemail={emailobj.sender.email}
         subject={emailobj.subject}
         emailbody={emailobj.emailbody}
         sentDate={emailobj.sentDate}  
         key={index}/>
         ))}
     </Grid>
     <Grid item sm={3} >
       <Rightsidebar />
     </Grid>
   </Grid>
 </div>
  );
}

export default Home;
