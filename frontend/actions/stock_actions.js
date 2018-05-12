import * as APIutil from '../util/stocks_api_util';

export const RECEIVE_CURRENT_STOCK_PRICE = 'RECEIVE_CURRENT_STOCK_PRICE';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_SEARCHED_STOCK = 'RECEIVE_SEARCHED_STOCK';

export const fetchStockCurrPrice = tickerId => dispatch => {
  return APIutil.fetchStockCurrPrice(tickerId)
        .then(currStockPrice => dispatch(receiveCurrStockPrice(currStockPrice)));
};

export const fetchSearchedstock = tickerId => dispatch => {
  return APIutil.fetchStockCurrPrice(tickerId)
        .then(stock => dispatch(receiveSearchedStock(stock)));
};

export const buyStock = stock => dispatch => {
  return APIutil.buyStock(stock)
        .then(serverStock => dispatch(receiveStock(serverStock)));
};

const receiveCurrStockPrice = payload => {
  return {
    type: RECEIVE_CURRENT_STOCK_PRICE,
    payload
  };
};

const receiveSearchedStock = payload => {
  return {
    type: RECEIVE_SEARCHED_STOCK,
    payload
  };
};

const receiveStock = payload => {
  return {
    type: RECEIVE_STOCK,
    payload
  };
};
