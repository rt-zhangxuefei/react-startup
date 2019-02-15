import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Index from './containers/Index/Index'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/index" />} />
          <Route path={`/index`} component={Index} />
        </Switch>
      </Router>
    )
  }
}

export default App
