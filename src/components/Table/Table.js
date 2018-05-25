import React from "react";
import "./Table.css";
import tableBuilder from "../../utils/tableBuilder";

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

const Table = ({ teams, group }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">{group.name}</th>
          <th scope="col">P</th>
          <th scope="col">W</th>
          <th scope="col">D</th>
          <th scope="col">L</th>
          <th scope="col">GF</th>
          <th scope="col">GA</th>
          <th scope="col">GD</th>
          <th scope="col">Pts</th>
        </tr>
      </thead>
      <tbody>
        {teams.map((team, i) => {
          return (
            <tr key={i}>
              <th scope="row">{`${team.emojiString} ${team.name}`}</th>
              <td>{tableBuilder.getGamesPlayed(team.id, group.matches)}</td>
              <td>{tableBuilder.getGamesWon(team.id, group.matches)}</td>
              <td>{tableBuilder.getGamesDrawn(team.id, group.matches)}</td>
              <td>{tableBuilder.getGamesLost(team.id, group.matches)}</td>
              <td>{tableBuilder.getGoalsFor(team.id, group.matches)}</td>
              <td>{tableBuilder.getGoalsAgainst(team.id, group.matches)}</td>
              <td>{tableBuilder.getGoalDifference(team.id, group.matches)}</td>
              <td>{tableBuilder.getPoints(team.id, group.matches)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
