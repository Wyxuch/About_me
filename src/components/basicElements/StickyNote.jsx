import React from "react";
import Draggable from "react-draggable";

const StickyNote = ({ text, tilt, margin }) => {
  !margin && (margin = [0, 0, 0, 0]);
  !tilt && (tilt = 0);

  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

  return (
    <Draggable>
      <div>
        <div className="stickyNote" style={styles}>
          {text}
        </div>
      </div>
    </Draggable>
  );
};

export default StickyNote;
