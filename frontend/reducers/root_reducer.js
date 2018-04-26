import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import loadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  loading: loadingReducer
});

export default rootReducer;
