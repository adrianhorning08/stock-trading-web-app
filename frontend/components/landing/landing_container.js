import { connect } from 'react-redux';
import Landing from './landing';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let loggedIn = state.entities.session.currentUser ? true : false;
  let formType = ownProps.match.path === '/login' ? 'login' : 'signup';
  return { loggedIn, formType };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  // processForm (function): dispatching action creators login or
  // signup given formType
  let processForm = ownProps.match.path === '/login' ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Landing);
