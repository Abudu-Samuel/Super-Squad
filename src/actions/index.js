export const ADD_CHARACTER = 'ADD_CHARACTER';

export const addCharacterById = (id) => {
  const action = {
    type: 'ADD_CHARACTER',
    id
  }
 return action
}
