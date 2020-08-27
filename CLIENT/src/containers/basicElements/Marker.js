import { connect } from "react-redux";
import Marker from "../../components/basicElements/Marker";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
});

export default connect(null, mapDispatchToProps)(Marker);
