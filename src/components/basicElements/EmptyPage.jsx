import React from "react";
import Draggable from "react-draggable";

const EmptyPage = ({ content, tilt, margin }) => {
  !margin && (margin = [0, 0, 0, 0]);
  !tilt && (tilt = 0);

  const styles = {
    transform: `rotate(${tilt}deg)`,
    margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
  };

  console.log(margin);

  return (
    <Draggable>
      <div>
        <div className="emptyPage" style={styles}>
          {content}
        </div>
      </div>
    </Draggable>
  );
};

export default EmptyPage;
