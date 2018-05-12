export const fetchStockCurrPrice = (ticker) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote`
  });
};

export const buyStock = stock => {
  return $.ajax({
    method: 'POST',
    url: 'api/stocks',
    data: { stock }
  });
};
