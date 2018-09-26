import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions/index';
import createCharacter from './helper'

const hero = (state = [], action) => {
  switch(action.type) {
    case ADD_CHARACTER:
      let hero = [...state, createCharacter(action.id)]
      return hero;
    case REMOVE_CHARACTER:
      let removedHero = state.filter(item => item.id !== action.id);
      return removedHero;
    default:
    return state;
  }
}

export default hero;