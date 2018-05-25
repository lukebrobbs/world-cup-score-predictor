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
  getGamesPlayed: (teamId, matches) => {
    return matches.reduce((acc, curr) => {
      acc +=
        (curr.home_team === teamId || curr.away_team === teamId) &&
        curr.finished
          ? 1
          : 0;
      return acc;
    }, 0);
  },
  getGamesWon: (teamId, matches) => {
    return matches.reduce((acc, match) => {
      if (!match.finished) return acc;
      else {
        acc +=
          match.home_team === teamId && match.home_result > match.away_result
            ? 1
            : 0;
        acc +=
          match.away_team === teamId && match.home_result < match.away_result
            ? 1
            : 0;
        return acc;
      }
    }, 0);
  },
  getGamesDrawn: (teamId, matches) => {
    return matches.reduce((acc, match) => {
      if (!match.finished) return acc;
      else {
        acc +=
          match.home_team === teamId && match.home_result === match.away_result
            ? 1
            : 0;
        acc +=
          match.away_team === teamId && match.home_result === match.away_result
            ? 1
            : 0;
        return acc;
      }
    }, 0);
  },
  getGamesLost: (teamId, matches) => {
    return matches.reduce((acc, match) => {
      if (!match.finished) return acc;
      else {
        acc +=
          match.home_team === teamId && match.home_result < match.away_result
            ? 1
            : 0;
        acc +=
          match.away_team === teamId && match.home_result > match.away_result
            ? 1
            : 0;
        return acc;
      }
    }, 0);
  },
  getGoalsFor: (teamId, matches) => {
    return matches.reduce((acc, match) => {
      if (!match.finished) return acc;
      else {
        acc += match.home_team === teamId ? match.home_result : 0;
        acc += match.away_team === teamId ? match.away_result : 0;
        return acc;
      }
    }, 0);
  },
  getGoalsAgainst: (teamId, matches) => {
    return matches.reduce((acc, match) => {
      if (!match.finished) return acc;
      else {
        acc += match.home_team === teamId ? match.away_result : 0;
        acc += match.away_team === teamId ? match.home_result : 0;
        return acc;
      }
    }, 0);
  },
  getGoalDifference: (teamId, matches) => {
    return (
      tableBuilder.getGoalsFor(teamId, matches) -
      tableBuilder.getGoalsAgainst(teamId, matches)
    );
  },
  getPoints: (teamId, matches) => {
    return (
      tableBuilder.getGamesWon(teamId, matches) * 3 +
      tableBuilder.getGamesDrawn(teamId, matches)
    );
  }
};

export default tableBuilder;
