import { connect } from 'react-redux';
import App from './App';
import { logout } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let loggedIn = state.entities.session.currentUser ? true : false;
  return { loggedIn };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
