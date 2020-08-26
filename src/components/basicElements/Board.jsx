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
      <a
        href="https://www.linkedin.com/in/jaros%C5%82aw-kowalczyk-66a877190/"
        target="_blank"
      >
        <img
          src="./img/logoLiIn.png"
          className="logo linkedIn"
          alt="linkedIn logo"
        />
      </a>
      <a>
        <img
          src="./img/logoGmail.svg"
          className="logo gmail"
          alt="Gmail logo"
        />
      </a>
      <a href="https://github.com/Wyxuch" target="_blank">
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
