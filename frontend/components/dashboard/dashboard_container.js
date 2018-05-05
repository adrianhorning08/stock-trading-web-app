import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/user_actions';
import { fetchStockCurrPrice } from '../../actions/stock_actions';

const mapStateToProps = state => {
  return {
    stocks: state.entities.stocks.stocks,
    currentUser: state.entities.session.currentUser,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchStockCurrPrice: tickerId => dispatch(fetchStockCurrPrice(tickerId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
