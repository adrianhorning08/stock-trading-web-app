import { RECEIVE_STOCK } from '../actions/session_actions';
import merge from 'lodash/merge';

export const stocksReducer = (state = {}, action) => {
  console.log(action.type === RECEIVE_STOCK);
  switch (action.type) {
    case RECEIVE_STOCK:
      return action.stock;
    default:
      return state;
  }
};
