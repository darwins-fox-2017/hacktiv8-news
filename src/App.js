import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import News from './components/News'
import Search from './components/Search'

const data = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0
  }, {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1
  }
]

class App extends Component {
	constructor(){
		super()
		this.state = {
			data : data
		}
	}
	searchNews(event){
		this.setState({
			keyWord:event.target.value
		})
	}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hacktiv8 News
        </p>

				<Search handleChange = {this.searchNews.bind(this)}/>
				<News handleKeyword={this.state.keyWord} data={this.state.data}/>
      </div>
    );
  }
}

export default App;
