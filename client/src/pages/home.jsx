import React from 'react';
import Header from '../components/header/Header';
import Leftsidebar from '../components/leftsidebar/leftsidebar';
import Rightsidebar from '../components/rightsidebar/rightsidebar';
import '../components/rightsidebar/rightsidebar.css'



function Home() {
  return (
    <div>
      <Header/> 
      <Rightsidebar/>
      <Leftsidebar/>
    </div>
  );
}

export default Home;
