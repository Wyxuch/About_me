import { connect } from "react-redux";
import { saveScore, loadScore } from "../../actions";
import Handheld from "../../components/basicElements/Handheld";

const mapDispatchToProps = (dispatch, ownProps) => ({
  content: ownProps.children,
  saveScore: (score) => dispatch(saveScore(score)),
  loadScore: () => dispatch(loadScore()),
});

const mapStateToProps = (state) => {
  return { highScore: state.highScore };
};

export default connect(mapStateToProps, mapDispatchToProps)(Handheld);
