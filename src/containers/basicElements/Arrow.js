import { connect } from "react-redux";
import Arrow from "../../components/basicElements/Arrow";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
});

export default connect(null, mapDispatchToProps)(Arrow);
