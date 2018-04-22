import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { stockReducer } from './stock_reducer';

const entitiesReducer = combineReducers({
  session: sessionReducer,
  stocks: stockReducer
});

export default entitiesReducer;
