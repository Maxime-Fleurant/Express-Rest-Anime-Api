import path from 'path';

import { Model } from 'objection';

class Character extends Model {
  static get tableName() {
    return 'characters';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        nativeName: { type: 'string' },
        largeImage: { type: 'string' },
        mediumImage: { type: 'string' },
        description: { type: 'string' },
        animeId: { type: 'string' }
      },
      required: ['animeId']
    };
  }
}

export default Character;
