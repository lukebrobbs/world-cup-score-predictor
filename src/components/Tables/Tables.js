import React, { Component } from "react";
import axios from "axios";
import Table from "../Table/Table";
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
    const groups = ["A", "B", "C", "D", "E", "F", "G", "H"];

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            {teams.map((team, i) => {
              return <Table key={i} teams={team} group={groups[i]} />;
            })}
          </div>
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
