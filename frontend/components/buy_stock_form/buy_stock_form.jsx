import React from 'react';
import { fetchStockCurrPrice } from '../../util/stocks_api_util';

class BuyStockForm extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: '',
      tickerId: '',
      stockPrice: null,
      companyName: '',
      showStockSubmitForm: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.update = this.update.bind(this);
    this.searchForStock = this.searchForStock.bind(this);
    this.buyStockButton = this.buyStockButton.bind(this);
    this.showStockSubmitForm = this.showStockSubmitForm.bind(this);
    this.toggleSubmitForm = this.toggleSubmitForm.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  async searchForStock(e) {
    e.preventDefault();

    let response = await fetchStockCurrPrice(this.state.tickerId);
    this.setState(
      {
        tickerId: response.quote.symbol,
        stockPrice: response.quote.latestPrice,
        companyName: response.quote.companyName
      }
    );
  }

  toggleSubmitForm() {
    this.setState({showStockSubmitForm: !this.state.showStockSubmitForm})
  }

  buyStockButton() {
    // this is where you should check to see if they already have the stock

    if (this.state.stockPrice) {
      if (this.props.stocks[this.state.tickerId]) {
        return <p>Looks like you already have that stock chief. You wanna buy more shares?</p>
      } else {
        return <button onClick={this.toggleSubmitForm}>Buy</button>;
      }
    } else {
      return null
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();

    // After it submits, it should clear the state


    const stock = {
      ticker_id: this.state.tickerId,
      purchase_cost: this.state.stockPrice,
      amount: Number(this.state.amount),
      user_id: this.props.userId
    };
    this.props.buyStock(stock).then(() => this.props.fetchStockCurrPrice(stock.ticker_id));
  }

  showStockSubmitForm() {
    if (this.state.showStockSubmitForm) {
      return (
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="number"
            value={this.state.amount}
            placeholder="How many shares?"
            onChange={this.update('amount')}
            />
          <button>Submit</button>
        </form>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <section className="buy-stock-form">
        Search for a stock
        <input
          type='text'
          value={this.state.tickerId}
          onChange={this.update('tickerId')}
          placeholder="Type in ticker symbol"
          />
        <button onClick={this.searchForStock}>Check stock</button>
        <h2>Current Price</h2>
        {this.state.stockPrice}{this.state.companyName}{this.buyStockButton()}
        {this.showStockSubmitForm()}
    </section>
    );
  }
}

export default BuyStockForm;
