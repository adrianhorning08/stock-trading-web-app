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
      return (
        <div>
          {this.props.stock.ticker_id}
          {this.state.currPrice}
        </div>
      );
    }
  }
}

export default StockItem;
