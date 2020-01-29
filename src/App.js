import React from 'react'
import { HashRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import ItList from './ItList'
import Bloggers from './Bloggers'

import './App.css'

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to='/bloggers'>Bloggers</Link>
        </li>
        <li>
          <Link to='/cool-kids'>Cool Kids</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path='/bloggers' component={Bloggers} />
      <Route exact path='/cool-kids' component={ItList} />
      <Redirect to='/bloggers' />
    </Switch>
  </Router>
)

export default App
