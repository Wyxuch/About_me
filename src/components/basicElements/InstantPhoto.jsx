import React from "react";
import Draggable from "react-draggable";

const InstantPhoto = ({ image, text, tilt, margin }) => {
  margin ? (margin = margin) : (margin = [0, 0, 0, 0]);
  tilt ? (tilt = tilt) : (tilt = 0);

  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

  return (
    <Draggable>
      <div>
        <div className="instantPhoto" style={styles}>
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
