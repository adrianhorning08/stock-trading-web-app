export const fetchCurrPrice = (ticker) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote`
  });
};
