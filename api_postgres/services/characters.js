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
    const { firstName, lastName, nativeName, largeImage, mediumImage, description, animeId } = body;

    const character = await Character.query().insert({
      firstName,
      lastName,
      nativeName,
      largeImage,
      mediumImage,
      description,
      animeId
    });

    return character;
  }
};
