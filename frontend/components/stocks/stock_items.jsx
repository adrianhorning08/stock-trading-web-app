import React from 'react';
import { fetchCurrPrice } from '../../util/stocks_api_util';

class StockItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currPrice: null
    };
  }

  componentDidMount() {
    fetchCurrPrice(this.props.stock.ticker_id).then(res => {
      this.setState({currPrice: res.quote.latestPrice});
    });
  }

  render() {
    if (this.state.currPrice === null) {
      return null;
    } else {
      let gainLoss = ((this.state.currPrice - this.props.stock.purchase_cost)/this.props.stock.purchase_cost).toFixed(2);
      return (
        <div className="stock-item">
          <h2>{this.props.stock.ticker_id}</h2>
          <h3>Current Price</h3>
          ${this.state.currPrice}
          <h3>Your Shares</h3>
          {this.props.stock.amount}
          <h3>Gain/Loss</h3>
          {gainLoss}%
        </div>
      );
    }
  }
}

export default StockItem;
