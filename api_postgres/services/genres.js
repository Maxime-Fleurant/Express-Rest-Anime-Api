import Genre from '../models/genre';

export default {
  getGenres: async () => {
    const genres = await Genre.query();

    return genres;
  },

  getGenreById: async id => {
    const genre = await Genre.query().findById(id);

    return genre;
  },

  getGenreAnimes: async id => {
    const animes = await Genre.relatedQuery('animes').for(id);

    return animes;
  }
};
