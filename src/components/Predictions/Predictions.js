import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Auth from "../../Auth/Auth";
import axios from "axios";
import db from "../fire";
import LeagueTable from "../Table/Table";
import tableBuilder from "../../utils/tableBuilder";
import ScoreInput from "../ScoreInput/ScoreInput";
import groups from "../../utils/matchPredictions";

const newAuth = new Auth();

class Predictions extends Component {
  state = {
    profile: {},
    data: [],
    predictions: [],
    predictionData: groups
  };

  componentWillMount() {
    const { userProfile, getProfile } = newAuth;
    if (!userProfile) {
      getProfile((err, profile) => {
        db.collection("users")
          .doc(profile.sub)
          .set({
            ...profile,
            predictions: []
          })
          .then(() => {
            return axios.get(
              "https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"
            );
          })
          .then(data => {
            this.setState({ profile, data: data.data });
          });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  handleClick = () => {
    console.log("Clicked");
  };
  handleChange = (event, index) => {
    const { predictions } = this.state;
  };
  updatePredictionTable = (homeScore, awayScore, group, match) => {
    const updatedPredictionData = { ...this.state.predictionData };

    updatedPredictionData[group].matches[match].home_result = +homeScore;
    updatedPredictionData[group].matches[match].away_result = +awayScore;
    updatedPredictionData[group].matches[match].finished = true;

    this.setState({ predictionData: updatedPredictionData });
  };

  renderPredictions = () => {
    const { data, predictionData } = this.state;
    const teams = tableBuilder.getGroups(data.teams);
    const groupNames = ["a", "b", "c", "d", "e", "f", "g", "h"];
    return (
      <div>
        {teams.map((team, i) => {
          return (
            <div className="container" key={i}>
              <div className="well" key={i}>
                <LeagueTable
                  key={i}
                  teams={team}
                  group={predictionData[groupNames[i]]}
                />
                {data.groups[groupNames[i]].matches.map((match, j) => {
                  const playingTeams = data.teams.reduce(
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
                  return (
                    <ScoreInput
                      teams={playingTeams}
                      key={j + 1}
                      group={groupNames[i]}
                      match={j}
                      updateTable={this.updatePredictionTable}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
        <button className="btn btn-primary" onClick={() => this.handleClick()}>
          Submit
        </button>
      </div>
    );
  };

  render() {
    const { data } = this.state;
    return <div>{data.teams ? this.renderPredictions() : null}</div>;
  }
}

export default Predictions;
