import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import IssuesContainer from "./containers/issues-container";
import Issue from "./components/issue";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/issue/:id" component={Issue} />
          <Route path="/" exact component={IssuesContainer} />
        </Switch>
      </Router>
    );
  }
}

export default App;
