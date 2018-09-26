import { combineReducers } from 'redux';
import characters from './character';
import heros from './hero';

const rootReducer = combineReducers({
  characters,
  heros
})

export default rootReducer;