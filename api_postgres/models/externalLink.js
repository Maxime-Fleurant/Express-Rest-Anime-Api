import path from 'path';

import { Model } from 'objection';

class ExternalLink extends Model {
  static get tableName() {
    return 'externalLinks';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        site: { type: 'string' },
        url: { type: 'string' },
        animeId: { type: 'string' }
      },
      required: ['animeId', 'site', 'url']
    };
  }
}

export default ExternalLink;
