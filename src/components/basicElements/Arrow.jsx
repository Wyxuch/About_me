import React from "react";

const Arrow = ({ tilt, margin }) => {
  !margin && (margin = [0, 0, 0, 0]);
  !tilt && (tilt = 0);

  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

  const parentMargin = {
    margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
  };

  return (
    <div style={parentMargin}>
      <img src="./img/arrow.svg" alt="Arrow" className="arrow" style={styles} />
    </div>
  );
};

export default Arrow;
