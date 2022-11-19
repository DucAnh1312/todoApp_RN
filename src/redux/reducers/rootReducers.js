import {combineReducers} from 'redux';
import noteReducers from './noteReducers';
import idReducers from './idReducers';

const rootReducer = combineReducers({
  noteReducers,
  idReducers,
});

export default rootReducer;
