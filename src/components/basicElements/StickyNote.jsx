import React from "react";
import Draggable from "react-draggable";

const StickyNote = ({ text, tilt }) => {
  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

  return (
    <Draggable>
      <div>
        <div className="stickyNote" style={styles}>
          <p>{text}</p>
        </div>
      </div>
    </Draggable>
  );
};

export default StickyNote;
