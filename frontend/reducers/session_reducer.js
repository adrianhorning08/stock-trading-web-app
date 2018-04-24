import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

export const sessionReducer = (state = {currentUser: null}, action) => {
  console.log(action.payload);
  let newState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.payload.currentUser};
    case LOGOUT_CURRENT_USER:
      return {currentUser: null};
    default:
      return state;
  }
};
