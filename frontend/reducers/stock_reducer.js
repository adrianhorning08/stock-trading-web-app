import { RECEIVE_USER, RECEIVE_CURRENT_USER } from '../actions/user_actions';
import {
  RECEIVE_CURRENT_STOCK_PRICE,
  RECEIVE_STOCK,
  RECEIVE_SEARCHED_STOCK
} from '../actions/stock_actions';
import merge from 'lodash/merge';

const _nullStock = {
  stocks: null,
  currPrices: {},
  searchStock: null
};

export const stockReducer = (state = _nullStock, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SEARCHED_STOCK:
      newState = merge({}, state);
      newState.searchStock = {
        tickerId: action.payload.quote.symbol,
        price: action.payload.quote.latestPrice
      };
      return newState;
    case RECEIVE_STOCK:
      newState = merge({}, state);
      newState.stocks[action.payload.stock.ticker_id] = action.payload.stock;
      return newState;
    case RECEIVE_USER:
      newState = merge({}, state);
      newState.stocks = action.payload.stocks;
      return newState;
    case RECEIVE_CURRENT_STOCK_PRICE:
      newState = merge({}, state);
      newState.currPrices[action.payload.quote.symbol] = action.payload.quote.latestPrice;
      return newState;
    default:
      return state;
  }
};
