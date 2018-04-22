import * as APIutil from '../util/task_api_util';

export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const REMOVE_STOCK = 'REMOVE_STOCK';

export const fetchStock = stock => dispatch => {
  return APIutil.fetchTask(stock)
    .then(serverStock => dispatch(receieveStock(serverStock)));
};

const receieveStock = stock => {
  return {
    type: RECEIVE_STOCK,
    stock
  };
};

export const buyStock = stock => dispatch => {
  return APIutil.createTask(stock)
    .then(serverStock => dispatch(receieveStock(serverStock)));
};

export const updateStock = stock => dispatch => {
  return APIutil.updateStock(stock)
    .then(serverStock => dispatch(receieveStock(serverStock)));
};

export const deleteStock = stock => dispatch => {
  return APIutil.deleteTask(stock)
    .then(serverStock => dispatch(removeStock(serverStock)));
};

const removeStock = stock => {
  return {
    type: REMOVE_STOCK,
    stock
  };
};
