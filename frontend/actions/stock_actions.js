import * as APIutil from '../util/stocks_api_util';

export const RECEIVE_CURRENT_STOCK_PRICE = 'RECEIVE_CURRENT_STOCK_PRICE';
export const FINISH_LOADING_STOCKS = 'FINISH_LOADING_STOCKS';

export const fetchStockCurrPrice = tickerId => dispatch => {
  return APIutil.fetchStockCurrPrice(tickerId)
        .then(currStockPrice => dispatch(receiveCurrStockPrice(currStockPrice)));
};

const receiveCurrStockPrice = payload => {
  return {
    type: RECEIVE_CURRENT_STOCK_PRICE,
    payload
  };
};

export const finishLoadingStocks = () => ({
  type: FINISH_LOADING_STOCKS
});
