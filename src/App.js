import React, { Component } from 'react';
import NewsList from './components/NewsList'
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      query: '',
      data: [
        {
          title: 'React',
          url: 'https://facebook.github.io/react/',
          author: 'Jordan Walke',
          num_comments: 3,
          points: 4,
          objectID: 0,
        },
        {
          title: 'Redux',
          url: 'https://github.com/reactjs/redux',
          author: 'Dan Abramov, Andrew Clark',
          num_comments: 2,
          points: 5,
          objectID: 1,
        },
      ]
    }
  }

  changeQuery(event) {
    this.setState({query: event.target.value});
  }
  render() {
    return (
      <div className="App">
      <br />
        <form>
          <input type="text" name="search" onChange={this.changeQuery.bind(this)} />
        </form>
        <NewsList data={this.state.data} />
      </div>
    );
  }
}

export default App;
