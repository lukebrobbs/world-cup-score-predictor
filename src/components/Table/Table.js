import React from "react";
import "./Table.css";
import tableBuilder from "../../utils/tableBuilder";

const Table = ({ teams, group }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">{group.name}</th>
          <th scope="col">P</th>
          <th scope="col">W</th>
          <th scope="col">D</th>
          <th scope="col">L</th>
          <th scope="col">GF</th>
          <th scope="col">GA</th>
          <th scope="col">GD</th>
          <th scope="col">Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{`${teams[0].emojiString} ${teams[0].name}`}</th>
          <td>{tableBuilder.getGamesPlayed(teams[0], group)}</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">{`${teams[1].emojiString} ${teams[1].name}`}</th>
          <td>{tableBuilder.getGamesPlayed(teams[1], group)}</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">{`${teams[2].emojiString} ${teams[2].name}`}</th>
          <td>{tableBuilder.getGamesPlayed(teams[2], group)}</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <th scope="row">{`${teams[3].emojiString} ${teams[3].name}`}</th>
          <td>{tableBuilder.getGamesPlayed(teams[3], group)}</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
