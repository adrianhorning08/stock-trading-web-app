import { RECEIVE_STOCK } from '../actions/stock_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const _nullStock = {
  currentStock: null,
  stocks: null
};

export const stockReducer = (state = _nullStock, action) => {
  const newState = {};
  switch (action.type) {
    case RECEIVE_USER:
      newState.stocks = action.payload.stocks;
      return merge({}, state, newState);
    case RECEIVE_STOCK:
      newState.currentStock = action.stock;
      return merge({}, state, newState);
    default:
      return state;
  }
};
