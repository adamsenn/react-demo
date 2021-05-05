import React from 'react'
// import { HashRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom'
// import Bloggers from './Bloggers'
// import Posts from './Posts'
// import ItList from './ItList'
import CourseLauncher from './CourseLauncher'

import './App.css'

const App = () => (
  <>
    <CourseLauncher />
    {/* <Router>
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
          <li>
            <Link to='/launch'>Course Launcher</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/bloggers' component={Bloggers} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/cool-kids' component={ItList} />
        <Route exact path='/launch' component={CourseLauncher} />
        <Redirect to='/launch' />
      </Switch>
    </Router> */}
    <footer>{process.env.REACT_APP_VERSION || 'local'}</footer>
  </>
)

export default App
