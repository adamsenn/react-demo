import React from 'react'
import { HashRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import ItList from './ItList'
import Posts from './Posts'

import './App.css'

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to='/cool-kids'>Cool Kids</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path='/cool-kids' component={ItList} />
      <Route exact path='/posts' component={Posts} />
      <Redirect to='/cool-kids' />
    </Switch>
  </Router>
)

export default App
