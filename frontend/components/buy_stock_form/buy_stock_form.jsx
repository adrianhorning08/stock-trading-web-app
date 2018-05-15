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
    this.props.stock.amount = this.state.amount;
    this.props.buyStock(this.props.stock);
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
