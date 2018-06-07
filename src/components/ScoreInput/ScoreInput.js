import React, { Component } from "react";
import "./ScoreInput.css";

class ScoreInput extends Component {
  handleChange = (e, homeAway) => {
    const { updateTable, group, match } = this.props;
    if (e.target.value.length === 1 && homeAway === "Home") {
      this.refs.Away.focus();
    }
    if (this.refs.Home.value && this.refs.Away.value) {
      updateTable(this.refs.Home.value, this.refs.Away.value, group, match);
    }
  };
  render() {
    const { teams, match, group } = this.props;

    return (
      <div>
        <span>{`${teams.home.emojiString} ${teams.home.name}`}</span>
        <input
          type="number"
          className="scoreInput"
          onChange={e => {
            this.handleChange(e, "Home");
          }}
          maxLength={1}
          ref="Home"
        />
        <input
          type="number"
          className="scoreInput"
          onChange={e => {
            this.handleChange(e, "Away");
          }}
          maxLength={1}
          ref="Away"
        />
        <span>{`${teams.away.name} ${teams.away.emojiString}`}</span>
      </div>
    );
  }
}

export default ScoreInput;
