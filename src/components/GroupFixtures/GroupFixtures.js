import React from "react";
import FixtureCard from "../FixtureCard/FixtureCard";

const GroupFixtures = ({ group, teams, stadiums }) => {
  // console.log(group, teams);
  return (
    <div
      className={"panel panel-info"}
      style={{ width: "90%", margin: "auto", marginBottom: "5%" }}
    >
      <div className={"panel panel-heading text-center"}>
        <h4>{group.name}</h4>
      </div>
      <div className={"panel panel-body"}>
        {group.matches.map((match, i) => {
          const playingTeams = teams.reduce(
            (acc, team) => {
              if (team.id === match.home_team) {
                acc.home = team;
              }
              if (team.id === match.away_team) {
                acc.away = team;
              }
              return acc;
            },
            { home: null, away: null }
          );

          const stadium = stadiums.filter(stadium => {
            return stadium.id === match.stadium;
          });
          return (
            <FixtureCard
              key={i}
              match={match}
              teams={playingTeams}
              stadium={stadium}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GroupFixtures;
