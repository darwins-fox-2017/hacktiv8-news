import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import NewList from './components/NewList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      searchKeyword: ''
    }
  }

  componentDidMount() {
    const self = this
    fetch('https://hn.algolia.com/api/v1/search?query=redux').then((response) => {
      return response.json()
    }).then((data) => {
      self.setState({
        data: data.hits
      })
    }).catch((err) => {
      console.log(err);
    })
  }

  searchNews(event) {
    this.setState({
      searchKeyword: event.target.value
    })
  }

  render() {
    return (
      <div className='container'>
        <Search handleChange={this.searchNews.bind(this)}/>
        <NewList handleKeyword={this.state.searchKeyword} data={this.state.data}/>
      </div>
    )
  }
}

export default App;
