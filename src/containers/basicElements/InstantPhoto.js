import { connect } from "react-redux";
import { setZIndex } from "../../actions";
import InstantPhoto from "../../components/basicElements/InstantPhoto";

const mapDispatchToProps = (dispatch, ownProps) => ({
  image: ownProps.children[0],
  text: ownProps.children[1],
  setIndex: (e) => dispatch(setZIndex(e)),
});

export default connect(null, mapDispatchToProps)(InstantPhoto);
