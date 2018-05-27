
// You need to use this for a batch of stocks. Limit the amount of ajax calls
export const fetchStockCurrPrice = (ticker) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote`
  });
};

export const buyMoreShares = stock => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/stocks/${stock.id}`,
    data: { stock }
  });
};

// Need to use this to fetch just a price - WAY easier
// export const fetchStockCurrPrice = ticker => {
//   return $.ajax({
//     method: 'GET',
//     url: `https://api.iextrading.com/1.0/stock/${ticker}/price`
//   });
// };

export const buyNewStock = stock => {
  return $.ajax({
    method: 'POST',
    url: 'api/stocks',
    data: { stock }
  });
};
