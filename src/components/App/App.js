import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Home/Home";
import Results from "../Results/Results";
import Nav from "../Nav/Nav";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <React.Fragment>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/results" component={Results} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
