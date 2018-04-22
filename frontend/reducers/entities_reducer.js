import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { stocksReducer } from './stock_reducer';

const entitiesReducer = combineReducers({
  session: sessionReducer,
  stock: stocksReducer
});

export default entitiesReducer;
