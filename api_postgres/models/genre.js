import path from 'path';

import { Model } from 'objection';

class Genre extends Model {
  static get tableName() {
    return 'genres';
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
}

export default Genre;
