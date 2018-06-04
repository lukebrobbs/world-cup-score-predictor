import React, { Component } from "react";
import "./FixtureCard.css";
import * as moment from "moment";

const FixtureCard = ({ match, teams, stadium }) => {
  console.log(match);
  //   console.log(teams);
  const date = moment(match.date).format("MMM DD");
  const time = moment(match.date).format("HH:00");

  return (
    <div
      className="panel panel-default"
      style={{
        width: "40%",
        display: "inline-block",
        marginLeft: "5%",
        marginRight: "5%"
      }}
    >
      <div className="panel panel-body">
        <div className="fixture d-inline-block">
          <h4 className="homeTeam">{`${teams[0].emojiString}${
            teams[0].name
          }`}</h4>
          <h4 className="awayTeam">{`${teams[1].emojiString}${
            teams[1].name
          }`}</h4>
          <div className="date">
            <h5 className="text-center">{date}</h5>
            <h5 className="text-center">{time}</h5>
          </div>
          <h3 className="text-center">{match.home_result}</h3>
          <div />
          <h3 className="text-center">{match.away_result}</h3>
        </div>
      </div>
    </div>
  );
};

export default FixtureCard;
