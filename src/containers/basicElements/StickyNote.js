import { connect } from "react-redux";
import { setZIndex } from "../../actions";
import StickyNote from "../../components/basicElements/StickyNote";

const mapDispatchToProps = (dispatch, ownProps) => ({
  text: ownProps.children,
  setIndex: (e) => dispatch(setZIndex(e)),
});

export default connect(null, mapDispatchToProps)(StickyNote);
