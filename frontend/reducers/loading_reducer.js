import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_CURRENT_STOCK_PRICE,
  FINISH_LOADING_STOCKS
} from '../actions/stock_actions';
import { RECEIVE_USER,
  START_LOADING_USER,
  FINISH_LOADING_USER
} from '../actions/user_actions';
import merge from 'lodash/merge';

const loadingReducer = (state = false, action) => {
  let newState = {};
  switch (action.type) {
    case START_LOADING_USER:
      return false;
    case RECEIVE_CURRENT_USER:
      return false;
    case RECEIVE_CURRENT_STOCK_PRICE:
      return false;
    case RECEIVE_USER:
      return false;
    case FINISH_LOADING_STOCKS:
      return false;
    case FINISH_LOADING_USER:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
