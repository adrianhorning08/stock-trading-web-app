import * as APIutil from '../util/stocks_api_util';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const REMOVE_STOCK = 'REMOVE_STOCK';

export const fetchStock = stock => dispatch => {
  return APIutil.fetchStock(stock)
    .then(serverStock => dispatch(receieveStock(serverStock)));
};

const receieveStock = stock => {
  return {
    type: RECEIVE_STOCK,
    stock
  };
};

export const buyStock = stock => dispatch => {
  return APIutil.createStock(stock)
    .then(serverStock => dispatch(receieveStock(serverStock)));
};

export const updateStock = stock => dispatch => {
  return APIutil.updateStock(stock)
    .then(serverStock => dispatch(receieveStock(serverStock)));
};

export const deleteStock = stock => dispatch => {
  return APIutil.deleteStock(stock)
    .then(serverStock => dispatch(removeStock(serverStock)));
};

const removeStock = stock => {
  return {
    type: REMOVE_STOCK,
    stock
  };
};
