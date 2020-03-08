import Character from '../models/character';

export default {
  getCharacters: async () => {
    const characters = await Character.query();

    return characters;
  },

  getCharacterById: async id => {
    const character = await Character.query().findById(id);

    return character;
  },

  createCharacter: async body => {
    const character = await Character.query().insert(body);

    return character;
  },

  updateCharacter: async (id, data) => {
    const character = await Character.query().patchAndFetchById(id, data);

    return character;
  },

  removeCharacter: async id => {
    const anime = await Character.query().deleteById(id);

    return anime;
  }
};
