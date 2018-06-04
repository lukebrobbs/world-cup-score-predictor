import React from "react";
import FixtureCard from "../FixtureCard/FixtureCard";

const GroupFixtures = ({ group, teams }) => {
  //   console.log(group, teams);
  return (
    <div className={"panel panel-default"}>
      <div className={"panel panel-heading"}>{group.name}</div>
      <div className={"panel panel-body"}>
        {group.matches.map((match, i) => {
          return <FixtureCard key={i} match={match} teams={teams} />;
        })}
      </div>
    </div>
  );
};

export default GroupFixtures;
