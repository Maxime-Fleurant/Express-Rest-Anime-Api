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
  },

  postAnime: async body => {
    const {
      romajiTitle,
      englishTitle,
      nativeTitle,
      description,
      startDate,
      endDate,
      nbEpisodes,
      trailer,
      xLargeCover,
      largeCover,
      mediumCover,
      popularity,
      avgScore,
      studioId,
      genres = [],
      tags = [],
      externalLinks = [],
      characters = []
    } = body;

    const anime = await Anime.query().insertGraph(
      {
        romajiTitle,
        englishTitle,
        nativeTitle,
        description,
        startDate,
        endDate,
        nbEpisodes,
        trailer,
        xLargeCover,
        largeCover,
        mediumCover,
        popularity,
        avgScore,
        studio: { id: studioId },
        genres: genres.map(el => {
          return { id: el };
        }),
        tags: tags.map(el => {
          return { id: el };
        }),
        externalLinks: externalLinks,
        characters: characters
      },
      { relate: true }
    );

    return anime;
  },

  updateAnime: async (id, data) => {
    const anime = await Anime.query().patchAndFetchById(id, data);

    return anime;
  },

  removeAnime: async id => {
    const anime = await Anime.query().deleteById(id);

    return anime;
  },

  addGenreToAnime: async (animedId, genreId) => {
    const animeGenres = await (await Anime.query().findById(animedId)).$relatedQuery('genres');

    if (animeGenres.find(el => el.id === genreId)) {
      return animeGenres;
    }

    const newGenre = await Anime.relatedQuery('genres')
      .for(animedId)
      .relate(genreId);

    return newGenre;
  },

  addTagToAnime: async (animeId, tagId) => {
    const animeGenres = await (await Anime.query().findById(animeId)).$relatedQuery('tags');

    if (animeGenres.find(el => el.id === tagId)) {
      return animeGenres;
    }

    const newTag = await Anime.relatedQuery('tags')
      .for(animeId)
      .relate(tagId);

    return newTag;
  },

  removeGenreToAnime: async (animedId, genreId) => {
    const newGenre = await Anime.relatedQuery('genres')
      .for(animedId)
      .unrelate()
      .where('id', '=', genreId);

    return newGenre;
  },

  removeTagToAnime: async (animeId, tagId) => {
    const newTag = await Anime.relatedQuery('tags')
      .for(animeId)
      .unrelate()
      .where('id', '=', tagId);

    return newTag;
  }
};
