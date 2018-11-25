import React, { Component } from 'react';
import SignUp from './views/SignUp/SignUp';
import Login from './views/Login/Login';
import {BrowserRouter,Switch, Route, Link} from 'react-router-dom';
import Routes from './components/route';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Routes/>
        </Switch>
      </BrowserRouter> 
    );
  }
}

export default App;
