import {combineReducers} from 'redux';
import characterReducer from './characterReducer';

const rootReducer = combineReducers({
  charakter: characterReducer,
});

export default rootReducer;
