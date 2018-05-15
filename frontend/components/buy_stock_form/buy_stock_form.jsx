import React from 'react';

class BuyStockForm extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    const stock = {
      ticker_id: this.props.stock.tickerId,
      purchase_cost: this.props.stock.price,
      amount: Number(this.state.amount),
      user_id: this.props.userId
    };
    this.props.buyStock(stock);
  }

  update(e) {
    this.setState({amount: e.target.value});
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

export default BuyStockForm;
