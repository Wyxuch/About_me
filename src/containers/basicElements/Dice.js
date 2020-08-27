import { connect } from "react-redux";
import { setZIndex } from "../../actions";
import Dice from "../../components/basicElements/Dice";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
  setIndex: (e) => dispatch(setZIndex(e)),
});

export default connect(null, mapDispatchToProps)(Dice);
