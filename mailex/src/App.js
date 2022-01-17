import React from 'react';
import Header from './components/header/Header';
import Leftsidebar from './components/leftsidebar/leftsidebar';
import Rightsidebar from './components/rightsidebar/rightsidebar';


// import { createTheme } from '@mui/material/styles';
// import { teal } from '@material-ui/core/colors';

// const theme = createTheme({
//   pallette: {
//     primary: teal,
//     secondary: teal
//   }
// })

// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <Header/>
      <Leftsidebar/>
      <Rightsidebar/>
    </div>
  );
}

export default App;
