import charactersJson from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions/index'
import createCharacter from './helper'

const characters = (state = charactersJson, action) => {
   switch  (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    case REMOVE_CHARACTER:
      let addedCharacters = [...state, createCharacter(action.id)];
      return addedCharacters;
    default:
      return state;
  }
}

export default characters;