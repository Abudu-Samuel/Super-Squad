import { ADD_CHARACTER } from '../actions/index';
import createCharacter from './helper'

const hero = (state = [], action) => {
  switch(action.type) {
    case ADD_CHARACTER:
      let hero = [...state, createCharacter(action.id)]
      return hero;
    default:
    return state;
  }
}

export default hero;