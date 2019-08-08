import React, { Component } from 'react';
import './App.css';
import Parking from './parking.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Parking application</h2>
        </div>
        <Parking></Parking>
      </div>
    );
  }
}

export default App;
