//From React
import React from 'react';

//From Components
import Header from '../components/header/Header';
import Leftsidebar from '../components/leftsidebar/leftsidebar';
import Rightsidebar from '../components/rightsidebar/rightsidebar';
import Inbox from '../components/inbox/inbox';
import Sentbox from '../components/sentbox/sentbox';
import Chat from '../components/chat/chat';
import '../components/rightsidebar/rightsidebar.css';

//From Material UI
import { Grid } from '@mui/material';

//From React Router Dom
import { BrowserRouter as Router, Route } from 'react-router-dom';




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
    <Router>
      <div style={{ 
      backgroundImage: `url("https://source.unsplash.com/random/${window.innerWidth}x${window.innerHeight}/?skyscrapers")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
    }}>
        <Grid container>
        <Header open={handleDrawerOpen} close={handleDrawerClose} current={draweropen}/>
        <Grid item sm={2} xs={2}>
          <Leftsidebar open={handleDrawerOpen} close={handleDrawerClose} current={draweropen} box={box} sentbox={opensentbox} inbox={openinbox} />
        </Grid>
        <Grid item sm={7} xs={10} marginTop={"30px"} marginBottom={"30px"}>
          <Route exact path="/">
            {checkbox()}
          </Route>
          <Route path="/:id">
            <Chat/>
          </Route>
        </Grid>
        <Grid item sm={3} >
          <Rightsidebar />
        </Grid>
      </Grid>
    </div>
  </Router>
  );
}

export default Home;
