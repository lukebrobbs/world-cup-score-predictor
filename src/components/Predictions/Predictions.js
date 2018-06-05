import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Auth from "../../Auth/Auth";
import db from "../fire";

const newAuth = new Auth();

class Predictions extends Component {
  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = newAuth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  render() {
    return <p>Predictions</p>;
  }
}

export default Predictions;
