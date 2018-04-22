import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { fetchStock } from '../../actions/stock_actions';

const mapStateToProps = state => {
  return {
    stock: state.stock
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchStock: stock => dispatch(fetchStock(stock))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
