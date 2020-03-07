import path from 'path';

import { Model } from 'objection';

class Review extends Model {
  static get tableName() {
    return 'reviews';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        summary: { type: 'string' },
        body: { type: 'string' },
        score: { type: 'number' },
        animeId: { type: 'string' }
      },
      required: ['animeId', 'summary', 'score', 'body']
    };
  }
}

export default Review;
