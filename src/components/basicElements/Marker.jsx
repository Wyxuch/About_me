import React from "react";

const Marker = ({ content, tilt }) => {
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
