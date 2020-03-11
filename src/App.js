import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <Button>My button</Button>
    </header>
  </div>
);

export default App;
