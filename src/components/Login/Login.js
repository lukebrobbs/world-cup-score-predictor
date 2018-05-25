import React, { Component } from "react";
import { login } from "../../utils/AuthService";

class Login extends Component {
  state = {
    redirectToPreviousRoute: false
  };

  render() {
    return (
      <div>
        <p>You must log in to view this page</p>
        <button className="btn btn-info log" onClick={() => login()}>
          Log in
        </button>
      </div>
    );
  }
}

export default Login;
