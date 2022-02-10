import React from 'react';
import Header from '../components/header/Header';
import Leftsidebar from '../components/leftsidebar/leftsidebar';
import Rightsidebar from '../components/rightsidebar/rightsidebar';
import Post from '../components/post/Post'
import '../components/rightsidebar/rightsidebar.css'
import { Grid } from '@mui/material';
import Email from '../components/email/email'

import { QUERY_INBOX, QUERY_PROFILE } from '../utils/queries'
import { useQuery } from '@apollo/client';

import Auth from '../utils/auth';




function Home() {
  const [draweropen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const { loading, data } = useQuery(QUERY_INBOX)

  const inbox = data?.inbox || [];


  return (
    <div>
    <Grid container>
     <Header open={handleDrawerOpen} close={handleDrawerClose} current={draweropen}/>
     <Grid item sm={2} xs={2}>
       <Leftsidebar open={handleDrawerOpen} close={handleDrawerClose} current={draweropen}/>
     </Grid>
     <Grid item sm={7} xs={10} marginTop={"30px"} marginBottom={"30px"}>
        <Email/>
       {inbox.map((emailobj, index) => (
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
