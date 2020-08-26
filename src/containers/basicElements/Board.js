import { connect } from "react-redux";
import Board from "../../components/basicElements/Board";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
});

export default connect(null, mapDispatchToProps)(Board);
