import React from "react";
import Draggable from "react-draggable";

const EmptyPage = ({ content }) => {
  return (
    <Draggable
      onStart={console.log("started")}
      onDrag={console.log("dragging")}
    >
      <div>
        <div className="emptyPage"></div>
      </div>
    </Draggable>
  );
};

export default EmptyPage;
