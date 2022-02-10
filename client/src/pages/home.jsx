import React from 'react';
import Header from '../components/header/Header';
import Leftsidebar from '../components/leftsidebar/leftsidebar';
import Rightsidebar from '../components/rightsidebar/rightsidebar';
import '../components/rightsidebar/rightsidebar.css'
import { Grid } from '@mui/material';
import Inbox from '../components/inbox/inbox';
import Sentbox from '../components/sentbox/sentbox';




function Home() {
  const [box, setBox] = React.useState('inbox');

  const openinbox = () => {
    setBox('inbox')
    console.log(box);
  }

  const opensentbox = () => {
    setBox('sendbox')
    console.log(box);
  }

  function checkbox(){
    if(box === 'inbox'){
      return (<Inbox/>)
    } else {
      return (<Sentbox/>)
    }
  }
  

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
       <Leftsidebar open={handleDrawerOpen} close={handleDrawerClose} current={draweropen} box={box} sentbox={opensentbox} inbox={openinbox} />
     </Grid>
     <Grid item sm={7} xs={10} marginTop={"30px"} marginBottom={"30px"}>
        {checkbox()}
     </Grid>
     <Grid item sm={3} >
       <Rightsidebar />
     </Grid>
   </Grid>
 </div>
  );
}

export default Home;
