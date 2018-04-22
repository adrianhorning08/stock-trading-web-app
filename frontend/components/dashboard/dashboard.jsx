import React from 'react';
import StockItem from '../stocks/stock_items';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockName: '',
      stock: ''
    };
    this.searchForStock = this.searchForStock.bind(this);
    this.calcCurrStockPrice = this.calcCurrStockPrice.bind(this);
  }

  componentDidMount() {
    if (this.props.currentUser.user !== undefined) {
      this.props.fetchUser(this.props.currentUser.user.id);
    }
  }

  update() {
    return e => {
      this.setState({stockName: e.target.value});
    };
  }

  searchForStock(e) {
    e.preventDefault();
    this.props.fetchStock(this.state.stockName).then(res => {
      this.calcCurrStockPrice(res);
    });
  }

  calcCurrStockPrice(stockTimes) {
    const date = new Date();
    let dayOfTheWeek = date.getDay();
    let day = date.getDate();
    let month = date.getMonth() +1;
    let hour = date.getHours();

    // if the day is on a weekend
    if (dayOfTheWeek === 6) {
      day--;
      hour = '16:00:00';
    }
    if (dayOfTheWeek === 0) {
      day-=2;
      hour = '16:00:00';
    }

    // if user is trying to acccess after closing
    if (hour >= 16) {
      hour = '16:00:00';
    }
    // Or before opening
    if (hour < 10) {
      day--;
      hour = '16:00:00';
    }
    // Add zeros for days or months less than 10
    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0'+ month;
    }
    this.setState({stock: stockTimes.stock['Time Series (60min)'][`2018-${month}-${day} ${hour}`]});
  }

  render() {
    let stockList;
    if (this.props.stocks === null) {
      stockList = null;
    } else {
      stockList = Object.values(this.props.stocks).map(stock => {
        return <StockItem
                stock={stock}
                fetchStock={this.props.fetchStock}
                key={stock.id}>{stock.ticker_id}></StockItem>
      });
    }

    return (
      <div>
        <h1>Dash</h1>
        Search for a stock
        <input
          type='text'
          value={this.state.stockName}
          onChange={this.update('stockName')}
          placeholder="Type in ticker symbol"
          />
        <button onClick={this.searchForStock}>Check stock</button>
        <h2>Current Price</h2>
        {this.state.stock['1. open']}
        <button onClick={this.props.logout}>Logout</button>
        <h2>My Stocks</h2>
        {stockList}
      </div>
    );
  }
}

export default Dashboard;
