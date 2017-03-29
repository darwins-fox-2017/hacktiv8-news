import React, { Component } from 'react';
import Menu from './Menu'
import NewsList from './components/NewsList'
import FormSearch from './components/FormSearch'
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

  fetchHN () {
    if(this.state.query !== '') {
      fetch('https://hn.algolia.com/api/v1/search?query=' + this.state.query)
      .then( (response) => {
        return response.json()
      })
      .then( (response) => {
        this.setState({
          data: response.hits
        })
      })
    }
  }

  changeQuery(event) {
    this.setState({query: event.target.value});
    this.fetchHN(this.state.query)
  }
  render() {
    return (
      <div className="App">
        <Menu />
        <FormSearch changeQuery={this.changeQuery.bind(this)} />
        <NewsList
        query={this.state.query}
        data={this.state.data} />

      </div>
    );
  }
}

export default App;
