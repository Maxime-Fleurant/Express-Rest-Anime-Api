import Character from '../models/character';

export default {
  getCharacters: async () => {
    const characters = await Character.query();

    return characters;
  },

  getCharacterById: async id => {
    const character = await Character.query().findById(id);

    return character;
  }
};
