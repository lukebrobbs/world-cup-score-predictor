const tableBuilder = {
  getGroups: teams => {
    let group = [];
    return teams.reduce((acc, curr) => {
      group.push(curr);
      if (group.length === 4) {
        acc.push(group);
        group = [];
      }
      return acc;
    }, []);
  },
  getGamesPlayed: (team, group) => {
    const { id } = team;
    const { matches } = group;
    return matches.reduce((acc, curr) => {
      acc +=
        (curr.home_team === id || curr.away_team === id) && curr.finished
          ? 1
          : 0;
      return acc;
    }, 0);
  },
  getGamesWon: (team, group) => {},
  getGamesDrawn: (team, group) => {},
  getGamesLost: (team, group) => {},
  getGoalsFor: (team, group) => {},
  getGoalsAgainst: (team, group) => {},
  getGoalDifference: (team, group) => {},
  getPoints: (team, group) => {}
};

export default tableBuilder;
