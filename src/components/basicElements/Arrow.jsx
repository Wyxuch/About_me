import React from "react";

const Arrow = ({ tilt, margin }) => {
  !margin && (margin = [0, 0, 0, 0]);
  !tilt && (tilt = 0);

  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

  const parentMargin = {
    margin: `${margin[0]}% ${margin[1]}% ${margin[2]}% ${margin[3]}%`,
  };

  return (
    <div style={parentMargin}>
      <img src="./img/arrow.svg" alt="Arrow" className="arrow" style={styles} />
    </div>
  );
};

export default Arrow;
