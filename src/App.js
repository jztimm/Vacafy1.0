import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Home from './Components/Home'
import Header from './Components/Header.js'
import Footer from './Components/Footer.js'
import SearchPage from './Components/SearchPage'
import Login from './Components/Login'
import Signup from './Components/Signup'
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser)
      
      if (authUser) {
        // user is logged in
      } else {
        // user is logged out
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>


  );
}

export default App;
