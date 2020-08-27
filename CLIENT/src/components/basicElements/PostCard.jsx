import React from "react";

const PostCard = ({ tilt, margin }) => {
  !margin && (margin = [0, 0, 0, 0]);
  !tilt && (tilt = 0);

  const styles = {
    transform: `rotate(${tilt}deg)`,
  };

  const parentMargin = {
    margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
  };

  return (
    <div style={parentMargin} className="elementWrapper">
      <div className="postCardOutline" id="postCard" style={styles}>
        <form className="postCardForm">
          <textarea name="message" id="message" />
          <div className="flexWrapperVertical">
            <div className="stampHolder"></div>
            <div>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mail"
              />
            </div>
            <div className="buttonGroup">
              <input type="reset" value="Reset" id="reset" />
              <input type="submit" value="Send" id="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostCard;
