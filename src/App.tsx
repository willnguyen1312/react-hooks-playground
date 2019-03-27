import React from 'react'
import UseState from './screens/useState'
import {Router, Link, RouteComponentProps} from '@reach/router'

const NotFound = (_: RouteComponentProps) => <div>Sorry, nothing found.</div>

const App = () => {
  return <div>
    <nav>
      <Link to="/useState">useState</Link>
    </nav>

    <Router>
      <UseState path="/useState" />

      <NotFound default/>
    </Router>
  </div>
}


export default App;