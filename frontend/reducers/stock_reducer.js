import { RECEIVE_STOCK } from '../actions/stock_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

export const stockReducer = (state = {}, action) => {
  const newState = {};
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload.stocks;
    default:
      return state;
  }
};
