import Tags from '../models/tag';

export default {
  getTags: async () => {
    const tags = await Tags.query();

    return tags;
  },

  getTagById: async id => {
    const tag = await Tags.query()
      .findById(id)
      .withGraphFetched('theme');

    return tag;
  },

  getTagAnimes: async id => {
    const animes = await Tags.relatedQuery('animes').for(id);

    return animes;
  }
};
