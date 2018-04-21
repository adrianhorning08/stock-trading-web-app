import { combineReducers } from 'redux';
import entities from './entities_reducer';

const RootReducer = combineReducers({
  entities: entities
});

export default RootReducer;
