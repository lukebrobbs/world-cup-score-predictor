import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import Results from "../Results/Results";
import Predictions from "../Predictions/Predictions";
import Login from "../Login/Login";
import Callback from "../Callback";
import Nav from "../Nav/Nav";
import "./App.css";
import { requireAuth } from "../../utils/AuthService";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
