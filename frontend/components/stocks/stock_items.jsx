import React from 'react';

class StockItem extends React.Component {
  constructor(props) {
    super(props);
    this.gainLoss = this.gainLoss.bind(this);
  }

  gainLoss() {
    const stock = this.props.stock;
    const orignal = stock.purchase_cost * stock.amount;
    const gainLoss = this.props.currPrice * stock.amount;
    const ans = (gainLoss - orignal).toFixed(2);
    return `$${ans}`;
  }

  render() {
      return (
        <section className="stock-item">
          <h2>{this.props.stock.ticker_id}</h2>
          <h3>Current Price</h3>
          ${this.props.currPrice}
          <h3>Your Shares</h3>
          {this.props.stock.amount}
          <h3>Gain/Loss</h3>
          {this.gainLoss()}
          <br/>
          <button>Sell</button>
        </section>
      );
    }
  }

export default StockItem;
