import React from "react";
import "./Table.css";
import tableBuilder from "../../utils/tableBuilder";
import { Table } from "react-bootstrap";

// const testData = {
//   name: "Group A",
//   winner: null,
//   runnerup: null,
//   matches: [
//     {
//       name: 1,
//       type: "group",
//       home_team: 1,
//       away_team: 2,
//       home_result: 3,
//       away_result: 2,
//       date: "2018-06-14T18:00:00+03:00",
//       stadium: 1,
//       channels: [4, 6],
//       finished: true,
//       matchday: 1
//     },
//     {
//       name: 2,
//       type: "group",
//       home_team: 3,
//       away_team: 4,
//       home_result: 1,
//       away_result: 0,
//       date: "2018-06-15T17:00:00+05:00",
//       stadium: 12,
//       channels: [3, 6],
//       finished: true,
//       matchday: 1
//     },
//     {
//       name: 17,
//       type: "group",
//       home_team: 1,
//       away_team: 3,
//       home_result: 3,
//       away_result: 10,
//       date: "2018-06-19T21:00:00+03:00",
//       stadium: 3,
//       channels: [3, 6],
//       finished: true,
//       matchday: 2
//     },
//     {
//       name: 18,
//       type: "group",
//       home_team: 4,
//       away_team: 2,
//       home_result: null,
//       away_result: null,
//       date: "2018-06-20T18:00:00+03:00",
//       stadium: 10,
//       channels: [3, 6],
//       finished: false,
//       matchday: 2
//     },
//     {
//       name: 33,
//       type: "group",
//       home_team: 4,
//       away_team: 1,
//       home_result: 3,
//       away_result: 1,
//       date: "2018-06-25T18:00:00+04:00",
//       stadium: 7,
//       channels: [4, 6],
//       finished: true,
//       matchday: 3
//     },
//     {
//       name: 34,
//       type: "group",
//       home_team: 2,
//       away_team: 3,
//       home_result: null,
//       away_result: null,
//       date: "2018-06-25T17:00:00+03:00",
//       stadium: 8,
//       channels: [5, 6],
//       finished: false,
//       matchday: 3
//     }
//   ]
// };

const LeagueTable = ({ teams, group }) => {
  const entries = teams.map(team => {
    return {
      name: team.name,
      flag: team.emojiString,
      played: tableBuilder.getGamesPlayed(team.id, group.matches),
      won: tableBuilder.getGamesWon(team.id, group.matches),
      drawn: tableBuilder.getGamesDrawn(team.id, group.matches),
      lost: tableBuilder.getGamesLost(team.id, group.matches),
      goalsFor: tableBuilder.getGoalsFor(team.id, group.matches),
      goalsAgainst: tableBuilder.getGoalsAgainst(team.id, group.matches),
      goalDifference: tableBuilder.getGoalDifference(team.id, group.matches),
      points: tableBuilder.getPoints(team.id, group.matches)
    };
  });
  const sortedEntries = tableBuilder.sortTable(entries);
  return (
    <Table hover>
      <thead>
        <tr>
          <th scope="col" className="col-md-5">
            {group.name}
          </th>
          <th scope="col">P</th>
          <th scope="col">W</th>
          <th scope="col">D</th>
          <th scope="col">L</th>
          <th scope="col">GF</th>
          <th scope="col">GA</th>
          <th scope="col">GD</th>
          <th scope="col" dataField="points">
            Pts
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedEntries.map((team, i) => {
          return (
            <tr key={i}>
              <th scope="row">{`${team.flag} ${team.name}`}</th>
              <td>{team.played}</td>
              <td>{team.won}</td>
              <td>{team.drawn}</td>
              <td>{team.lost}</td>
              <td>{team.goalsFor}</td>
              <td>{team.goalsAgainst}</td>
              <td>{team.goalDifference}</td>
              <td>{team.points}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default LeagueTable;
