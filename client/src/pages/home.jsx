import React from 'react';
import Header from '../components/header/Header';
import Leftsidebar from '../components/leftsidebar/leftsidebar';
import Rightsidebar from '../components/rightsidebar/rightsidebar';
import Post from '../components/post/Post'
import '../components/rightsidebar/rightsidebar.css'
import { Grid } from '@mui/material';

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
     <Grid item sm={7} xs={10} marginTop={"30px"}>
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
       <Post />
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
