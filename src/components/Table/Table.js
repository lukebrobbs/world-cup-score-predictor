import React from "react";
import "./Table.css";

const Table = ({ teams, group }) => {
  console.log(teams);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">{`Group ${group}`}</th>
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
          <td>0</td>
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
          <td>0</td>
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
          <td>0</td>
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
          <td>0</td>
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
