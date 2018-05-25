import React, { Component } from "react";
import { login } from "../../utils/AuthService";

class Login extends Component {
  state = {
    redirectToPreviousRoute: false
  };

  render() {
    return (
      <div className="container text-center">
        <h3>You must be logged in to view this page</h3>
        <button className="btn btn-info log" onClick={() => login()}>
          Log in
        </button>
      </div>
    );
  }
}

export default Login;
