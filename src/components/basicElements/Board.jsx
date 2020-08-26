import React from "react";

const Board = ({ tilt, margin }) => {
  !margin && (margin = [0, 0, 0, 0]);
  !tilt && (tilt = 0);

  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

  const parentMargin = {
    margin: `${margin[0]}% ${margin[1]}% ${margin[2]}% ${margin[3]}%`,
  };

  return (
    <div style={parentMargin} className="board">
      <img
        src="./img/board.svg"
        alt="Board"
        className="boardImg"
        style={styles}
      ></img>
      <a>
        <img
          src="./img/logoLiIn.png"
          className="logo linkedIn"
          alt="linkedIn logo"
        />
        <img
          src="./img/logoGmail.svg"
          className="logo gmail"
          alt="Gmail logo"
        />
        <img
          src="./img/logoGithub.png"
          className="logo github"
          alt="Github logo"
        />
      </a>
    </div>
  );
};

export default Board;
