import React from 'react';
import StockItem from '../stocks/stock_items';
import { ClipLoader } from 'react-spinners';
import BuyStockFormContainer from '../buy_stock_form/buy_stock_form_container';

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
    this.toggleBuyStockForm = this.toggleBuyStockForm.bind(this);
  }

  async componentDidMount() {
    let response = await this.props.fetchUser(this.props.currentUser.id)
      Object.values(response.payload.stocks).map(el => {
        this.props.fetchStockCurrPrice(el.ticker_id);
    });
  }

  update() {
    return e => {
      this.setState({stockName: e.target.value});
    };
  }

  async searchForStock(e) {
    e.preventDefault();
    let response = await this.props.fetchSearchedStock(this.state.stockName);
    this.setState({stockPrice: response.payload.quote.latestPrice});
  }

  toggleBuyStockForm(e) {
    this.setState({showForm: !this.state.showForm});
  }

  buyStockButton() {
    if (this.state.stockPrice) {
      return <button onClick={this.toggleBuyStockForm}>Buy</button>;
    } else {
      return null;
    }
  }

  render() {

    let stockList;
    if (this.props.stocks === null) {
      stockList = null;
    } else if (Object.keys(this.props.currPrices).length === Object.keys(this.props.stocks).length) {
          stockList = Object.values(this.props.stocks).map(stock => {
            return <StockItem
              stock={stock}
              fetchStock={this.props.fetchStock}
              key={stock.id}
              fetchStockCurrPrice={this.props.fetchStockCurrPrice}
              currPrice={this.props.currPrices[stock.ticker_id]}
              >
            </StockItem>;
          });
      }

    return stockList ? (
      <section>
        <h1>Dashboard</h1>
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
        {this.state.showForm && < BuyStockFormContainer / >}
        <h1>My Stocks</h1>
        {stockList}
      </section>
    ) : <ClipLoader
          size={250}
          />;
  }
}

export default Dashboard;
