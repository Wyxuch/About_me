import React from "react";
import Draggable from "react-draggable";

const StickyNote = ({ text, tilt, margin, side, setIndex }) => {
  !margin && (margin = [0, 0, 0, 0]);
  !tilt && (tilt = 0);

  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

  const parentMargin = {
    margin: `${margin[0]}% ${margin[1]}% ${margin[2]}% ${margin[3]}%`,
  };

  return (
    <div style={parentMargin} className="elementWrapper">
      <Draggable>
        <div>
          <div
            className={`stickyNote animation_trigger_${side}`}
            style={styles}
            onMouseDown={(e) => {
              setIndex(e.target.className);
            }}
            onTouchStartCapture={(e) => {
              setIndex(e.target.className);
            }}
          >
            {text}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default StickyNote;
