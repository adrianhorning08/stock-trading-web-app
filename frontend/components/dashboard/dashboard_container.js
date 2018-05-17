import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import {
  fetchStockCurrPrice,
  buyStock,
  fetchSearchedStock,
  showBuyStockForm
} from '../../actions/stock_actions';

const mapStateToProps = state => {
  return {
    stocks: state.entities.stocks.stocks,
    currentUser: state.entities.session.currentUser,
    currPrices: state.entities.stocks.currPrices,
    showForm: state.ui.showForm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchStockCurrPrice: tickerId => dispatch(fetchStockCurrPrice(tickerId)),
    showBuyStockForm: () => dispatch(showBuyStockForm())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
