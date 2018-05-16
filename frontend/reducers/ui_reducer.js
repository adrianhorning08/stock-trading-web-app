import { RECEIVE_STOCK, SHOW_FORM } from '../actions/stock_actions';
import merge from 'lodash/merge';

const uiReducer = (state = {showForm: false}, action) => {
  let newState = {};
  switch (action.type) {
    case SHOW_FORM:
      newState = merge({}, state);
      newState.showForm = true;
      return newState;
    case RECEIVE_STOCK:
      newState = merge({}, state);
      newState.showForm = false;
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
