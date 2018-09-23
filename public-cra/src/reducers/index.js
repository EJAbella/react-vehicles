import { combineReducers } from 'redux';
import vehicles from './reducer_vehicles';

const rootReducer = combineReducers({
  vehicles
});

export default rootReducer;