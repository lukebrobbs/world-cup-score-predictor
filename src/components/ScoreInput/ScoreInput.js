import React from "react";
import "./ScoreInput.css";

const ScoreInput = ({ teams }) => {
  return (
    <div>
      <span>{`${teams[0].emojiString} ${teams[0].name}`}</span>
      <input className="scoreInput" />
      <input className="scoreInput" />
      <span>{`${teams[1].name} ${teams[1].emojiString}`}</span>
    </div>
  );
};

export default ScoreInput;
