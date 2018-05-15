import { connect } from 'react-redux';
import BuyStockForm from './buy_stock_form';
import { buyStock } from '../../actions/stock_actions';

const mapStateToProps = state => {
  return {
    stock: state.entities.stocks.searchStock,
    userId: state.entities.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyStock: stock => dispatch(buyStock(stock))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BuyStockForm);
