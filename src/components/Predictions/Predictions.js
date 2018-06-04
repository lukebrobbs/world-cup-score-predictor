import React from "react";
import Profile from "../Profile/Profile";
import Auth from "../../Auth/Auth";

const newAuth = new Auth();

const Predictions = () => {
  return <Profile auth={newAuth} />;
};

export default Predictions;
