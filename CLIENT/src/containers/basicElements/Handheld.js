import { connect } from "react-redux";
import { startSnake, restartSnake } from "../../actions";
import Handheld from "../../components/basicElements/Handheld";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
  start: () => dispatch(startSnake()),
  restart: () => dispatch(restartSnake()),
});

export default connect(null, mapDispatchToProps)(Handheld);
