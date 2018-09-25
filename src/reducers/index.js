import { combineReducers } from 'redux';
import character from './character';
import hero from './hero';

const rootReducer = combineReducers({
  character,
  hero
})

export default rootReducer;