import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Auth from './pages/auth';
import Home from './pages/home';



function App() {
  return (
    <Router>
      <Route exact path="/auth">
        <Auth />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
