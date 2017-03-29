import React from 'react'
import {
  Link
} from 'react-router-dom'

const Menu = () => (
    <div className="container">
    <ul id="test" className="list-menu">
      <li><Link to="/">News</Link></li>
      <li><Link to="/peoples">Peoples</Link></li>
    </ul>
    <br />
    </div>
)

export default Menu
