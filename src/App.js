import React from 'react'
import { HashRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
import Bloggers from './Bloggers'
import Posts from './Posts'
import ItList from './ItList'

import './App.css'

const App = () => (
  <Router>
    <nav>
      <ul>
        <li>
          <Link to='/bloggers'>Bloggers</Link>
        </li>
        <li>
          <Link to='/posts'>Posts</Link>
        </li>
        <li>
          <Link to='/cool-kids'>Cool Kids</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route exact path='/bloggers' component={Bloggers} />
      <Route exact path='/posts' component={Posts} />
      <Route exact path='/cool-kids' component={ItList} />
      <Redirect to='/cool-kids' />
    </Switch>
  </Router>
)

export default App
