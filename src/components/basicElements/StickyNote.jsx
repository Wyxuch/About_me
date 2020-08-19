import React from "react";
import Draggable from "react-draggable";

const StickyNote = ({ text }) => {
  return (
    <Draggable>
      <div>
        <div className="stickyNote"></div>
      </div>
    </Draggable>
  );
};

export default StickyNote;
