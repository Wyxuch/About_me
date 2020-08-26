import { connect } from "react-redux";
import { setZIndex } from "../../actions";
import PostCard from "../../components/basicElements/PostCard";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
  setIndex: (e) => dispatch(setZIndex(e)),
});

export default connect(null, mapDispatchToProps)(PostCard);
