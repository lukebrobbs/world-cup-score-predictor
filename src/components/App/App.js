import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../../history/history";
import Home from "../Home/Home";
import Results from "../Results/Results";
import Predictions from "../Predictions/Predictions";
import Login from "../Login/Login";
import Callback from "../Callback";
import Nav from "../Nav/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <React.Fragment>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/results" component={Results} />
              <Route path="/callback" component={Callback} />
              <Route path="/login" component={Login} />
              <Route path="/predictions" component={Predictions} />
            </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
