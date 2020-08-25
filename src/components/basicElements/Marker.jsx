import React from "react";

const Marker = ({ content, tilt, margin }) => {
  margin ? (margin = margin) : (margin = [0, 0, 0, 0]);
  tilt ? (tilt = tilt) : (tilt = 0);

  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

  return (
    <p className="marker" style={styles}>
      {content}
    </p>
  );
};

export default Marker;
