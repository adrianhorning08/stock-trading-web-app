export const fetchStock = stock => {
  return $.ajax({
    method: 'GET',
    url: `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=60min&outputsize=full&apikey=OLCZRP0HQ6HU45U7`
  });
};
