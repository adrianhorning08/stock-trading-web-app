import { connect } from 'react-redux';
import App from './App';
import { logout } from '../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  let loggedIn = state.entities.session.currentUser ? true : false;
  return { loggedIn };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(App));
