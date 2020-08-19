import { connect } from "react-redux";
import EmptyPage from "../../components/basicElements/EmptyPage";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
});

export default connect(null, mapDispatchToProps)(EmptyPage);
