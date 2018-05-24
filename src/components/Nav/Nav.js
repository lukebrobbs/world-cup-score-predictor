import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login, logout, isLoggedIn } from "../../utils/AuthService";
import "../App/App.css";

class Nav extends Component {
  handleClick = () => {
    isLoggedIn() ? logout() : login();
  };

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">
            World Cup Score Predictor
          </Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/results">Results</Link>
          </li>
          <li>
            <Link to={isLoggedIn() ? "/predictions" : "/login"}>
              My Predictions
            </Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            {isLoggedIn() ? (
              <button
                className="btn btn-danger log"
                onClick={() => this.handleClick()}
              >
                Log out{" "}
              </button>
            ) : (
              <button
                className="btn btn-info log"
                onClick={() => this.handleClick()}
              >
                Log In
              </button>
            )}
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
