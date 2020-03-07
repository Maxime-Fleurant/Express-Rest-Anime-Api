import path from 'path';

import { Model } from 'objection';

class Review extends Model {
  static get tableName() {
    return 'reviews';
  }
}

export default Review;
