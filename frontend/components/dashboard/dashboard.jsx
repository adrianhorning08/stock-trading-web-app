import React from 'react';
import StockItem from '../stocks/stock_items';
import { fetchCurrPrice } from '../../util/stocks_api_util';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockName: '',
      stockPrice: null
    };
    this.searchForStock = this.searchForStock.bind(this);
  }

  componentDidMount() {
    console.log(this.props.currentUser);
    if (this.props.currentUser !== null) {
      this.props.fetchUser(this.props.currentUser.id);
    }
  }

  update() {
    return e => {
      this.setState({stockName: e.target.value});
    };
  }

  searchForStock(e) {
    e.preventDefault();
    fetchCurrPrice(this.state.stockName).then(res => {
      this.setState({stockPrice: res.quote.latestPrice});
    });
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
                key={stock.id}>{stock.ticker_id}>
              </StockItem>;
      });
    }

    return (
      <div>
        <button onClick={this.props.logout}>Logout</button>
        <h1>Dashboard</h1>
        Search for a stock
        <input
          type='text'
          value={this.state.stockName}
          onChange={this.update('stockName')}
          placeholder="Type in ticker symbol"
          />
        <button onClick={this.searchForStock}>Check stock</button>
        <h2>Current Price</h2>
        {this.state.stockPrice}
        <h1>My Stocks</h1>
        {stockList}
      </div>
    );
  }
}

export default Dashboard;
