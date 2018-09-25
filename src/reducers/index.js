import { combineReducers } from 'redux';
import characters from './character';
import hero from './hero';

const rootReducer = combineReducers({
  characters,
  hero
})

export default rootReducer;