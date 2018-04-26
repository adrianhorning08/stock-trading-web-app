import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

export const sessionReducer = (state = false, action) => {
  let newState = {};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return true;
    default:
      return state;
  }
};
