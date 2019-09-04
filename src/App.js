import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/Home"
import ShowInfo from "./components/ShowInfo"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shows/:id' component={ShowInfo} />
        </Switch>
      </Router>
    )
  }
}

export default App
