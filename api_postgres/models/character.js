import path from 'path';

import { Model } from 'objection';

class Character extends Model {
  static get tableName() {
    return 'characters';
  }

  static get relationMappings() {
    return {
      anime: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, 'anime'),
        join: {
          from: 'characters.animeId',
          to: 'animes.id'
        }
      }
    };
  }
}

export default Character;
