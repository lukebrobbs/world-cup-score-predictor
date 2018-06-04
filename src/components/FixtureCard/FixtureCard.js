import React, { Component } from "react";
import "./FixtureCard.css";

const FixtureCard = ({ match, teams }) => {
  //   console.log(match);
  //   console.log(teams);
  const playingTeams = teams.filter(
    (team, i) => team.id === match.home_team || team.id === match.away_team
  );
  console.log(playingTeams);
  return (
    <div className="panel panel-default">
      <div className="panel panel-heading">
        <h4 className="text-center">{match.date}</h4>
      </div>
      <div className="panel panel-body">
        <div className="fixture">
          <div className="homeTeam">{`${playingTeams[0].emojiString}  ${
            playingTeams[0].name
          }`}</div>
          <div className="v">v</div>
          <div className="awayTeam">{`${playingTeams[1].name}  ${
            playingTeams[1].emojiString
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default FixtureCard;
