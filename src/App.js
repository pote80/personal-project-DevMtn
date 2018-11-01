import React, { Component } from 'react';
import './App.css';
import Nav from './Component/Nav/Nav';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav /> 
        <div>{routes}</div>
      </div>
    );
  }
}

export default App;
