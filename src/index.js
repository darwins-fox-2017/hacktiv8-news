import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import People from './People'

import './index.css';

ReactDOM.render(
  <Router>
  <div>
    <Route exact path="/" component={App} />
    <Route path="/peoples" component={People} />
  </div>
  </Router>
  ,
  document.getElementById('root')
);
