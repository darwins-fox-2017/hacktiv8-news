import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const data = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Reduct',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]
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
                <li><a href={item.url} target="_blank">{item.title}</a></li>
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
