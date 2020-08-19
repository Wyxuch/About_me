import React from "react";
import Draggable from "react-draggable";

const EmptyPage = ({ content }) => {
  return (
    <Draggable>
      <div>
        <div className="emptyPage">{content}</div>
      </div>
    </Draggable>
  );
};

export default EmptyPage;
