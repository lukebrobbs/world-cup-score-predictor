import { Component } from "react";
import { setIdToken, setAccessToken } from "../utils/AuthService";
import history from "../history/history";

class Callback extends Component {
  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "predictions";
  }

  render() {
    return null;
  }
}

export default Callback;
