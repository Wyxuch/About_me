import { connect } from "react-redux";
import { handleSubmit } from "../../actions";
import PostCard from "../../components/basicElements/PostCard";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
  handleSubmit: (content) => dispatch(handleSubmit(content)),
});

export default connect(null, mapDispatchToProps)(PostCard);
