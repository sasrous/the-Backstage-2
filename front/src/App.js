import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Homepage from './pages/Homepage';
import AuthProvider from './components/AuthProvider';

import './App.css';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} /> 
          <AnonRoute path="/signup" component={Signup} />
          <AnonRoute path="/login" component={Login} />
          <PrivateRoute path="/private" component={Private} />
        </Switch>
        
      </AuthProvider>
    )
  }
}

export default App;
