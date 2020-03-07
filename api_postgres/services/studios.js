import Studio from '../models/studio';

export default {
  getStudios: async () => {
    const studios = await Studio.query();

    return studios;
  },

  getStudioById: async id => {
    const studio = await Studio.query().findById(id);

    return studio;
  },

  getStudioAnimes: async id => {
    const animes = await Studio.relatedQuery('animes').for(id);

    return animes;
  },

  createStudio: async body => {
    const studio = await Studio.query().insert({
      name: body.name
    });

    return studio;
  }
};
