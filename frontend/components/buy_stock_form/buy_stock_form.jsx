import React from 'react';

class BuyStockForm extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: '1'
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
  }

  update(e) {
    console.log(e.target.value);
    return () => {
      this.setState({amount: e.target.value});
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
