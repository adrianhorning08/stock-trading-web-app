import { connect } from 'react-redux';
import BuyStockForm from './buy_stock_form';
import {
  buyNewStock,
  fetchStockCurrPrice,
  fetchSearchedStock
} from '../../actions/stock_actions';

const mapStateToProps = state => {
  return {
    stock: state.entities.stocks.searchStock,
    userId: state.entities.session.currentUser.id,
    stocks: state.entities.stocks.stocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyNewStock: stock => dispatch(buyNewStock(stock)),
    fetchStockCurrPrice: stock => dispatch(fetchStockCurrPrice(stock)),
    fetchSearchedStock: stock => dispatch(fetchSearchedStock(stock)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyStockForm);
