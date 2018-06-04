import React, { Component } from "react";
import GroupFixtures from "../GroupFixtures/GroupFixtures";
import axios from "axios";

class Matches extends Component {
  state = {
    data: []
  };
  componentDidMount() {
    axios
      .get(
        "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
      )
      .then(data => {
        this.setState({ data: data.data });
      });
  }

  renderMatches = () => {
    const { groups, teams } = this.state.data;
    const groupNames = Object.keys(groups);
    return (
      <div>
        {groupNames.map((group, i) => {
          return <GroupFixtures group={groups[group]} teams={teams} key={i} />;
        })}
      </div>
    );
  };

  render() {
    const { data } = this.state;
    return <div>{data.groups ? this.renderMatches() : null}</div>;
  }
}

export default Matches;
