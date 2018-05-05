import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_STOCK_PRICE } from '../actions/stock_actions';
import merge from 'lodash/merge';

const _nullStock = {
  stocks: null,
  currPrices: null
};

export const stockReducer = (state = _nullStock, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_USER:
      newState = merge({}, state);
      newState.stocks = action.payload.stocks;
      return newState;
    case RECEIVE_CURRENT_STOCK_PRICE:
      newState = merge({}, state);
      console.log(action.payload);
      newState.currPrices = action.payload;
      return newState;
    default:
      return state;
  }
};
