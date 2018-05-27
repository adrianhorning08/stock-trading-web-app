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
      showStockSubmitForm: false,
      buyingNewStock: true
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.update = this.update.bind(this);
    this.searchForStock = this.searchForStock.bind(this);
    this.buyStockButton = this.buyStockButton.bind(this);
    this.showStockSubmitForm = this.showStockSubmitForm.bind(this);
    this.toggleSubmitForm = this.toggleSubmitForm.bind(this);
    this.clearState = this.clearState.bind(this);
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

  clearState() {
    this.setState({
      tickerId: '',
      stockPrice: null,
      companyName: ''
    })
  }

  buyStockButton() {
    if (this.state.stockPrice) {
      if (this.props.stocks[this.state.tickerId]) {
        return (
          <div className="buy-shares">
            <p>Looks like you already have that stock chief. You wanna buy more shares?</p>
            <button onClick={this.toggleSubmitForm}>Let's do it</button>
            <button onClick={this.clearState}>Nah I'm good</button>
          </div>
        )
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
    // this should buyNewStock or buyMoreShares based on if this.state.buyNewStock is true/false

    const stock = {
      ticker_id: this.state.tickerId,
      purchase_cost: this.state.stockPrice,
      amount: Number(this.state.amount),
      user_id: this.props.userId
    };

    if (this.state.buyNewStock) {
      this.props.buyNewStock(stock).then(() => this.props.fetchStockCurrPrice(stock.ticker_id));
    } else {
      stock.id = this.props.stocks[this.state.tickerId].id
      this.props.buyMoreShares(stock);
      // so now you have to keep track of when it was purchased and the
      // amount that was purchased. Then calculate the gain or loss looping over that 
    }
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
