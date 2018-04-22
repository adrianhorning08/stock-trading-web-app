import React from 'react';

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
    this.setState({stock: stockTimes.stock['Time Series (60min)'][`2018-${month}-${day} 16:00:00`]});
  }

  render() {
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
        <h2>Current Price</h2>
        {this.state.stock['1. open']}
        <button onClick={this.searchForStock}>Check stock</button>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }
}

export default Dashboard;
