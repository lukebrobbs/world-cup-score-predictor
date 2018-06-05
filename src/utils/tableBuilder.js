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
  },
  sortTable: table => {
    const nameSort = table.sort((a, b) => {
      return a.name === b.name ? 0 : a.name < b.name ? -1 : 1;
    });
    const goalsAgainstSort = nameSort.sort((a, b) => {
      if (a.getGoalsAgainst < b.getGoalsAgainst) {
        return 1;
      }
      if (a.getGoalsAgainst > b.getGoalsAgainst) {
        return -1;
      }
      return 0;
    });
    const goalsForSort = goalsAgainstSort.sort((a, b) => {
      if (a.getGoalsFor > b.getGoalsFor) {
        return 1;
      }
      if (a.getGoalsFor < b.getGoalsFor) {
        return -1;
      }
      return 0;
    });
    const goalDifferenceSort = goalsForSort.sort((a, b) => {
      if (a.goalDifference < b.goalDifference) {
        return 1;
      }
      if (a.goalDifference > b.goalDifference) {
        return -1;
      }
      return 0;
    });

    return goalDifferenceSort.sort((a, b) => {
      if (a.points < b.points) {
        return 1;
      }
      if (a.points > b.points) {
        return -1;
      }
      return 0;
    });
  }
};

export default tableBuilder;
