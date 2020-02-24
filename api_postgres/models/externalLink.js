import path from 'path';

import { Model } from 'objection';

class ExternalLink extends Model {
  static get tableName() {
    return 'externalLinks';
  }

  static get relationMappings() {
    return {
      anime: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, 'anime'),
        join: {
          from: 'externalLinks.animeId',
          to: 'animes.id'
        }
      }
    };
  }
}

export default ExternalLink;
