import React, { Component } from 'react'
import Menu from './Menu'

export default class People extends Component {
  constructor () {
    super()
    this.state = { peoples: '' }
  }

  getPeople () {
    fetch('http://swapi.co/api/people/')
    .then( (response) => {
      return response.json()
    })
    .then( (response) => {
      this.setState({
        peoples: response.results
      })
    })
  }

  componentDidMount () {
    this.getPeople()
  }

  render () {
    if(this.state.peoples === '')
      return (<div>Loading...</div>)

    return (
      <div className="list-people">
      <Menu />
      <h1>Peoples</h1>
      <ul>
        {
          this.state.peoples.map( (people, index) => {
            return (<li key={index}>{people.name}</li>)
          })
        }
      </ul>
      </div>
    )
  }
}
