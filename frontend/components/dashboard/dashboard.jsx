import React from 'react';
import StockItem from '../stocks/stock_items';
import { ClipLoader } from 'react-spinners';
import BuyStockFormContainer from '../buy_stock_form/buy_stock_form_container';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    let response = await this.props.fetchUser(this.props.currentUser.id)
      Object.values(response.payload.stocks).map(el => {
        this.props.fetchStockCurrPrice(el.ticker_id);
    });
  }

  render() {

    let stockList;
    if (this.props.stocks === null) {
      stockList = null;
    } else if (Object.keys(this.props.currPrices).length === Object.keys(this.props.stocks).length) {
          stockList = Object.values(this.props.stocks).map(stock => {
            return <StockItem
              stock={stock}
              fetchStock={this.props.fetchStock}
              key={stock.id}
              fetchStockCurrPrice={this.props.fetchStockCurrPrice}
              currPrice={this.props.currPrices[stock.ticker_id]}
              >
            </StockItem>;
          });
      }

    return stockList ? (
      <section>
        <h1>Dashboard</h1>
        <BuyStockFormContainer/>
        <h1>My Stocks</h1>
        {stockList}
      </section>
    ) : <ClipLoader
          size={250}
          />;
  }
}

export default Dashboard;
