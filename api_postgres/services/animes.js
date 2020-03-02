import Anime from '../models/anime';

export default {
  getAnimes: async () => {
    const animes = await Anime.query().orderBy('popularity', 'desc');

    return animes;
  },

  getAnimeById: async id => {
    const anime = await Anime.query()
      .findById(id)
      .withGraphFetched(`[genres, reviews, studio, tags.theme, characters, externalLinks]`)
      .modifyGraph('reviews', builder => {
        return builder.select('summary', 'id', 'score').orderBy('score', 'desc');
      })
      .modifyGraph('tags', builder => {
        return builder.select('name', 'id');
      })
      .modifyGraph('characters', builder => {
        return builder.select('firstName', 'lastName', 'id', 'largeImage', 'mediumImage');
      });

    return anime;
  }
};
