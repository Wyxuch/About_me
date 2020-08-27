import React from "react";

class PostCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      margin: !props.margin ? [0, 0, 0, 0] : props.margin,
      tilt: !props.tilt ? 0 : props.tilt,
      handleSubmit: props.handleSubmit,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.animationEnd = this.animationEnd.bind(this);

    this.animateRef = React.createRef();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit() {
    this.state.handleSubmit({
      message: this.state.message,
      subject: this.state.subject,
      email: this.state.email,
    });

    this.animateRef.current.classList.add(`animation_trigger`);

    document.getElementsByClassName("postCardForm")[0].reset();
  }

  animationEnd() {
    this.animateRef.current.classList.remove(`animation_trigger`);
  }

  render() {
    const styles = {
      transform: `rotate(${this.state.tilt}deg)`,
    };

    const parentMargin = {
      margin: `${this.state.margin[0]}% ${this.state.margin[1]}% ${this.state.margin[2]}% ${this.state.margin[3]}%`,
    };
    return (
      <div style={parentMargin} className="elementWrapper">
        <div
          className="postCardOutline"
          id="postCard"
          style={styles}
          ref={this.animateRef}
          onAnimationEnd={this.animationEnd}
        >
          <form
            className="postCardForm"
            onSubmit={(e) => {
              e.preventDefault();
              this.handleSubmit();
            }}
          >
            <textarea
              name="message"
              id="message"
              onChange={this.handleChange}
            />
            <div className="flexWrapperVertical postCardRight">
              <div className="stampHolder"></div>
              <div>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  onChange={this.handleChange}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                  onChange={this.handleChange}
                />
              </div>
              <div className="buttonGroup">
                <input type="reset" value="Reset" id="resetForm" />
                <input type="submit" value="Send" id="submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default PostCard;
