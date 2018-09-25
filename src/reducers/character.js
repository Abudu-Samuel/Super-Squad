import charactersJson from '../data/characters.json';
import { ADD_CHARACTER } from '../actions/index'

const characters = (state = charactersJson, action) => {
   switch  (action.type) {
    case ADD_CHARACTER:
      let characters = state.filter(item => item.id !== action.id);
      return characters;
    default:
      return state;
  }
}

export default characters;