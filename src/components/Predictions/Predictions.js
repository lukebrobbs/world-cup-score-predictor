import React, { Component } from "react";
import Profile from "../Profile/Profile";
import Auth from "../../Auth/Auth";
import axios from "axios";
import db from "../fire";
import LeagueTable from "../Table/Table";
import tableBuilder from "../../utils/tableBuilder";
import ScoreInput from "../ScoreInput/ScoreInput";

const newAuth = new Auth();

class Predictions extends Component {
  state = {
    profile: {},
    data: [],
    predictions: []
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

  renderPredictions = () => {
    const { data } = this.state;
    const teams = tableBuilder.getGroups(data.teams);
    const groups = ["a", "b", "c", "d", "e", "f", "g", "h"];
    // console.log(teams);
    return (
      <div>
        {teams.map((team, i) => {
          return (
            <div className="container">
              <div className="well">
                <LeagueTable
                  key={i}
                  teams={team}
                  group={data.groups[groups[i]]}
                />
                {data.groups[groups[i]].matches.map((match, i) => {
                  const playingTeams = data.teams.filter((team, i) => {
                    return (
                      team.id === match.home_team || team.id === match.away_team
                    );
                  });
                  return <ScoreInput teams={playingTeams} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  render() {
    const { data } = this.state;

    return <div>{data.teams ? this.renderPredictions() : null}</div>;
  }
}

export default Predictions;
