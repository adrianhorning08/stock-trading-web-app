import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';

export const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.payload.user;
    default:
      return state;
  }
};
