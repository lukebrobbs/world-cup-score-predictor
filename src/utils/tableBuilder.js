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
  }
};

export default tableBuilder;
