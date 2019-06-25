import React, { Component } from 'react'
import logo from './logo.svg';
import DynamicCounter from "./components/DynamicCounter";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <DynamicCounter label="Apples" max={5}/>
          <DynamicCounter label="Oranges" max={10}/>
          <DynamicCounter label="Lemons" max={15}/>
        </header>
      </div>
    )
  }
}

export default App;