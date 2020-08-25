import { connect } from "react-redux";
import { setZIndex } from "../../actions";
import InstantPhoto from "../../components/basicElements/InstantPhoto";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
  setIndex: (e) => dispatch(setZIndex(e)),
});

export default connect(null, mapDispatchToProps)(InstantPhoto);
