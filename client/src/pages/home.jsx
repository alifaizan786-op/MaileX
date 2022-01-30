import React from 'react';
import Header from '../components/header/Header';
import Leftsidebar from '../components/leftsidebar/leftsidebar';
import Rightsidebar from '../components/rightsidebar/rightsidebar';
import Post from '../components/post/Post'
import '../components/rightsidebar/rightsidebar.css'
import { Grid } from '@mui/material';



function Home() {
  return (
    <div>
    <Grid container>
     <Header/>
     <Grid item sm={2} xs={2}>
       <Leftsidebar />\
     </Grid>
     <Grid item sm={7} xs={10}>
       <Post />
       <Post />
       <Post />
     </Grid>
     <Grid item sm={3} >
       <Rightsidebar />
     </Grid>
   </Grid>
 </div>
  );
}

export default Home;
