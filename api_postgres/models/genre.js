import path from 'path';

import { Model } from 'objection';

class Genre extends Model {
  static get tableName() {
    return 'genre';
  }

  static get relationMappings() {
    return {
      animes: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, 'anime'),
        join: {
          from: 'genres.id',
          through: {
            from: 'animes_genres.genreId',
            to: 'animes_genres.animeId'
          },
          to: 'animes.id'
        }
      }
    };
  }

  static async mapExistingGenre(genres) {
    const existingGenres = await this.query().whereIn('name', genres);

    const filteredGenre = genres
      .filter(genre => {
        return !existingGenres.find(exGenre => exGenre.name === genre);
      })
      .map(genre => {
        return {
          name: genre
        };
      });

    return [...existingGenres, ...filteredGenre];
  }
}

export default Genre;
