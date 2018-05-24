import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import history from "../../history/history";
import { AuthService } from "auth0-js";
import { login } from "../../utils/AuthService";

class Login extends Component {
  state = {
    redirectToPreviousRoute: false
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToPreviousRoute } = this.state;

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={() => login()}>Log in</button>
      </div>
    );
  }
}

export default Login;
