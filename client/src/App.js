import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div class="sidenav">
        <a class="active" href="About Safe Protests">About</a>
        <a href="#Browse Protests">Browse Protests</a>
        <a href="#Your Rights">Your Rights</a>
        <a href="#Settings">Settings</a>
        <a href = "#Terms of Service">Terms of Service</a>
      </div>
    </div>
    
  );
}

export default App;
