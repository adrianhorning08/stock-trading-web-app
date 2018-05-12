import { connect } from 'react-redux';
import BuyStockForm from './buy_stock_form';
import { fetchSearchedStock } from '../../actions/stock_actions';

const mapStateToProps = state => {
  return {
    stock: state.entities.stocks.searchStock
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchedStock: stock => dispatch(fetchSearchedStock(stock))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyStockForm);
