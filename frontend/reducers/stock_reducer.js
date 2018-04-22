import { RECEIVE_STOCK } from '../actions/stock_actions';
import merge from 'lodash/merge';

export const stockReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_STOCK:
      return action.stock;
    default:
      return state;
  }
};
