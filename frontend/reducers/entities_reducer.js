import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { stockReducer } from './stock_reducer';

const entitiesReducer = combineReducers({
  session: sessionReducer,
  stock: stockReducer
});

export default entitiesReducer;
