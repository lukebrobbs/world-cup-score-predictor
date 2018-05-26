import React, { Component } from "react";
import axios from "axios";
import LeagueTable from "../Table/Table";
import tableBuilder from "../../utils/tableBuilder";
import "./Tables.css";

class Tables extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
      )
      .then(data => {
        this.setState({ data });
      });
  }

  renderTeams = () => {
    const { data } = this.state;
    const teams = tableBuilder.getGroups(data.data.teams);
    const groups = ["a", "b", "c", "d", "e", "f", "g", "h"];

    return (
      <div className="container">
        <div className="well">
          {teams.map((team, i) => {
            return (
              <LeagueTable
                key={i}
                teams={team}
                group={data.data.groups[groups[i]]}
              />
            );
          })}
        </div>
      </div>
    );
  };

  render() {
    const { data } = this.state;

    return <div>{data.data ? this.renderTeams() : null}</div>;
  }
}

export default Tables;
