import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import DataList from './DataList'

const data = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  },
  {
    title: 'Redux',
    url: 'https://facebook.github.io/reactjs/redux',
    author: 'Dan Abramov. Anrdrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  },
]


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      // data: data,
      data: []
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          hacktiv8 news
        </p>

        <Form
          handleChange = {this.search.bind(this)}
        />

        <DataList
          handleKeyword = {this.state.keyword}
          data = {this.state.data}
        />


      </div>
    );
  }

  search(event) {
    this.setState({
      keyword: event.target.value
    })
  }

  componentDidMount() {
    fetch('https://hn.algolia.com/api/v1/search?query=redux', {method: 'get'})
    .then((result)=> {
      return result.json()
    })
    .then(data => {
      // console.log(data.hits);
      this.setState({data: data.hits})
    })
  }
}



export default App;
