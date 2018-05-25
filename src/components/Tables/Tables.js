import React, { Component } from "react";
import axios from "axios";
import Table from "../Table/Table";

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

    return (
      <div>
        {data.data.teams.map((team, i) => {
          return <Table key={i} team={team} />;
        })}
      </div>
    );
  };

  render() {
    const { data } = this.state;

    return <div>{data.data ? this.renderTeams() : null}</div>;
  }
}

export default Tables;
