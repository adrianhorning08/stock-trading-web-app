import React from 'react';
import StockItem from '../stocks/stock_items';
import { fetchCurrPrice } from '../../util/stocks_api_util';
import { ClipLoader

      } from 'react-spinners';

class BuyStockForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: undefined
    };
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  update() {
    return e => {
      this.setState({amount: e.target.value.replace(/\D/,'')});
    };
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          type="number"
          value={this.state.amount}
          placeholder="How many shares?"
          onChange={this.update}
          />
        <button>Submit</button>
      </form>
    );
  }
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockName: '',
      stockPrice: null,
      showForm: false
    };
    this.searchForStock = this.searchForStock.bind(this);
    this.buyStockButton = this.buyStockButton.bind(this);
    this.handleBuyStockSubmit = this.handleBuyStockSubmit.bind(this);
  }

  componentDidMount() {
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

  handleBuyStockSubmit(e) {
    this.setState({showForm: !this.state.showForm});
  }

  buyStockButton() {
    if (this.state.stockPrice) {
      return <button onClick={this.handleBuyStockSubmit}>Buy</button>;
    } else {
      return null;
    }
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
                key={stock.id}
                fetchStockCurrPrice={this.props.fetchStockCurrPrice}
                currPrices={this.props.currPrices}
                >
              </StockItem>;
      });
    }

    return stockList ? (
      <section>
        <h1>Dashboard</h1>
        <button onClick={this.props.logout}>Logout</button>
        Search for a stock
        <input
          type='text'
          value={this.state.stockName}
          onChange={this.update()}
          placeholder="Type in ticker symbol"
          />
        <button onClick={this.searchForStock}>Check stock</button>
        <h2>Current Price</h2>
        {this.state.stockPrice}{this.buyStockButton()}
        {this.state.showForm && < BuyStockForm / >}
        <h1>My Stocks</h1>
        {stockList}
      </section>
    ) : <ClipLoader
          size={250}
          />;
  }
}

export default Dashboard;
