import charactersJson from '../data/characters.json';

const createCharacter = (id) => {
  let character = charactersJson.find(item => item.id === id);
  return character
}

export default createCharacter;