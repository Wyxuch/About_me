import React from "react";
import Draggable from "react-draggable";

const Dice = ({ tilt, margin, setIndex }) => {
  !margin && (margin = [0, 0, 0, 0]);
  !tilt && (tilt = 0);

  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

  const parentMargin = {
    margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
  };

  return (
    <div style={parentMargin} className="elementWrapper">
      <Draggable>
        <div>
          <img
            src="./img/dice.svg"
            alt="Dice"
            className="dice"
            style={styles}
            onMouseDown={(e) => {
              setIndex(e.target.className);
            }}
            onTouchStartCapture={(e) => {
              setIndex(e.target.className);
            }}
          />
        </div>
      </Draggable>
    </div>
  );
};

export default Dice;
