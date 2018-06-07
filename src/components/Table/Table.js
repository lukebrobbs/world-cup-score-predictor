import React, { Component } from "react";
import "./Table.css";
import tableBuilder from "../../utils/tableBuilder";
import { Table } from "react-bootstrap";

class LeagueTable extends Component {
  // componentDidMount() {
  //   console.log(this.props);
  // }
  // shouldComponentUpdate(prevProps) {
  //   console.log(prevProps);
  // }
  entries = () => {
    const { teams, group } = this.props;

    return teams.map(team => {
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
  };

  sortedEntries = () => tableBuilder.sortTable(this.entries());

  render() {
    const { group } = this.props;
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
            <th scope="col">Pts</th>
          </tr>
        </thead>
        <tbody>
          {this.sortedEntries().map((team, i) => {
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
  }
}

export default LeagueTable;
