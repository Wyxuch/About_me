import React from "react";
import Draggable from "react-draggable";

const EmptyPage = ({ content, tilt }) => {
  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

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
