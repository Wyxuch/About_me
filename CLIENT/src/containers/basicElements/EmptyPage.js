import { connect } from "react-redux";
import { setZIndex } from "../../actions";
import EmptyPage from "../../components/basicElements/EmptyPage";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
  setIndex: (e) => dispatch(setZIndex(e)),
});

export default connect(null, mapDispatchToProps)(EmptyPage);
