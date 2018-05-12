import React from 'react';

class BuyStockForm extends React.Component {
  constructor() {
    super();
    this.state = {
      tickerId: undefined,
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

export default BuyStockForm;
