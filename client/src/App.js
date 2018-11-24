import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SignUp from './views/SignUp/SignUp';
import Login from './views/Login/Login';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Login/>
      </div>
    );
  }
}

export default App;
