import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './pages/auth';
import Home from './pages/home';



function App() {
  return (
    <Router>
      <Route path="/auth">
        <Auth />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
