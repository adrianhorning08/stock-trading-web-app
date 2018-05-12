import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import {
  fetchStockCurrPrice,
  buyStock,
  fetchSearchedStock
} from '../../actions/stock_actions';

const mapStateToProps = state => {
  return {
    stocks: state.entities.stocks.stocks,
    currentUser: state.entities.session.currentUser,
    currPrices: state.entities.stocks.currPrices,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchStockCurrPrice: tickerId => dispatch(fetchStockCurrPrice(tickerId)),
    buyStock: stock => dispatch(buyStock(stock)),
    fetchSearchedStock: stock => dispatch(fetchSearchedStock(stock))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
