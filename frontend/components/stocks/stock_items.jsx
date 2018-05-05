import React from 'react';

class StockItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPrice: null
    };
    this.gainLoss = this.gainLoss.bind(this);
  }

  componentDidMount() {
    this.props.fetchStockCurrPrice(this.props.stock.ticker_id);
  }

  gainLoss() {
    // return ((this.state.currPrice - this.props.stock.purchase_cost)/this.props.stock.purchase_cost).toFixed(2);
    const stock = this.props.stock;
    const orignal = stock.purchase_cost * stock.amount;
    const gainLoss = this.state.currPrice * stock.amount;
    const ans = (gainLoss - orignal).toFixed(2);
    return `$${ans}`;
  }

  render() {
      return (
        <div className="stock-item">
          <h2>{this.props.stock.ticker_id}</h2>
          <h3>Current Price</h3>
          ${this.state.currPrice}
          <h3>Your Shares</h3>
          {this.props.stock.amount}
          <h3>Gain/Loss</h3>
          {this.gainLoss()}
          <br/>
          <button>Sell</button>
        </div>
      );
    }
  }

export default StockItem;
