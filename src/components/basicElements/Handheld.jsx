import React from "react";

const Handheld = ({ tilt, margin, start, restart }) => {
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
      <div className="handheld" id="handheld" style={styles}>
        <div id="buttonsLeft">
          <div className="flexWrapper">
            <button id="upButton" />
          </div>
          <div className="flexWrapper">
            <button id="leftButton" />
            <button id="rightButton" />
          </div>
          <div className="flexWrapper">
            <button id="downButton" />
          </div>
        </div>
        <div id="screen">
          <canvas id="display"></canvas>
        </div>
        <div id="buttonsRight">
          <div className="buttonsWrapper">
            <button id="startButton" onClick={start} />
            <p>start</p>
          </div>
          <div className="buttonsWrapper">
            <button id="resetButton" onClick={restart} />
            <p>reset</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handheld;
