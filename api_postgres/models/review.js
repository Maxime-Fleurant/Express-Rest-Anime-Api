import path from 'path';

import { Model } from 'objection';

class Review extends Model {
  static get tableName() {
    return 'reviews';
  }

  static get relationMappings() {
    const Anime = path.join(__dirname, 'anime');

    return {
      anime: {
        relation: Model.BelongsToOneRelation,
        modelClass: Anime,
        join: {
          from: 'reviews.animeId',
          to: 'animes.id'
        }
      }
    };
  }
}

export default Review;
