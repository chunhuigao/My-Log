import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/home/index.js'
class App extends Component {
  render() {
    return (
      <div className="App">
       <Home />
      </div>
    );
  }
}

export default App;
