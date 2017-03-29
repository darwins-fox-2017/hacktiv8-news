import React from 'react'
import App from './App'
import People from './People'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Menu = () => (
  <Router>
    <ul>
      <li><Link to="/">News</Link></li>
      <li><Link to="/peoples">Peoples</Link></li>

      <Route exact path="/" component={App} />
      <Route path="/peoples" component={People} />
    </ul>
  </Router>
)

export default Menu
