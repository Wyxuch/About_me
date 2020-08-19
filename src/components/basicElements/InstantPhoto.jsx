import React from "react";
import Draggable from "react-draggable";

const InstantPhoto = ({ image, text }) => {
  return (
    <Draggable>
      <div>
        <div className="instantPhoto">
          <div className="instantPhotoImageWrapper">
            <div className="instantPhotoImage"></div>
          </div>
          <p className="instantPhotoText"></p>
        </div>
      </div>
    </Draggable>
  );
};

export default InstantPhoto;
