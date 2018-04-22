export const fetchStock = stock => {
  return $.ajax({
    method: 'GET',
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=60min&outputsize=compact&apikey=OLCZRP0HQ6HU45U7`
  });
};

export const fetchCurrPrice = (ticker) => {
  return $.ajax({
    method: 'GET',
    url: `https://api.iextrading.com/1.0/stock/${ticker}/batch?types=quote`
  });
};
