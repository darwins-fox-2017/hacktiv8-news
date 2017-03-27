import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = [1,2,3]
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <ul>
            { data.map((item) => {
              return (
                <li>{item}</li>
              )
            })
            }
          </ul>
        </p>
      </div>
    );
  }
}

export default App;
