import React from "react";
import Draggable from "react-draggable";

const EmptyPage = ({ content, tilt, margin, setIndex }) => {
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
      <Draggable>
        <div>
          <div
            className="emptyPage"
            style={styles}
            onMouseDown={(e) => {
              setIndex(e.target.className);
            }}
          >
            {content}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default EmptyPage;
