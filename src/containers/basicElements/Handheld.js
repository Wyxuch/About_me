import { connect } from "react-redux";
import { snakeScore } from "../../actions";
import Handheld from "../../components/basicElements/Handheld";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
  snakeScore: (score) => dispatch(snakeScore(score)),
});

export default connect(null, mapDispatchToProps)(Handheld);
