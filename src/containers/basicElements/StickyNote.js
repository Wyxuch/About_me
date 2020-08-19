import { connect } from "react-redux";
import StickyNote from "../../components/basicElements/StickyNote";

const mapDispatchToProps = (dispatch, ownProps) => ({
  text: ownProps.children,
});

export default connect(null, mapDispatchToProps)(StickyNote);
