import React, { Component } from "react";
import "./FixtureCard.css";
import * as moment from "moment";

const FixtureCard = ({ match, teams, stadium }) => {
  console.log(match);
  //   console.log(teams);
  const date = moment(match.date).format("MMM DD");
  const time = moment(match.date).format("HH:00");

  const dateJsx = (
    <div className="date">
      <h5 className="text-left">{date}</h5>
      <h5 className="text-left">{time}</h5>
    </div>
  );

  const scoreJsx = (
    <div className="date">
      <h5 className="text-left">{match.home_result}</h5>
      <h5 className="text-left">{match.away_result}</h5>
    </div>
  );
  return (
    <div
      className="panel panel-default"
      style={{
        width: "40%",
        display: "inline-block",
        marginLeft: "3%",
        marginRight: "3%"
      }}
    >
      <div className="panel panel-body">
        <div className="grid d-inline-block">
          <div>
            <h5 className="homeTeam">{`${teams[0].emojiString}${
              teams[0].name
            }`}</h5>
            <h5 className="awayTeam">{`${teams[1].emojiString}${
              teams[1].name
            }`}</h5>
          </div>
          {match.home_result ? scoreJsx : dateJsx}
        </div>
      </div>
    </div>
  );
};

export default FixtureCard;
