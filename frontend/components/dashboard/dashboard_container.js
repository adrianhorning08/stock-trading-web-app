import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { fetchStock } from '../../actions/stock_actions';
import { fetchUser } from '../../actions/stock_actions';

const mapStateToProps = state => {
  return {
    stocks: state.entities.stock.stocks,
    currentUser: state.entities.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchStock: stock => dispatch(fetchStock(stock)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
