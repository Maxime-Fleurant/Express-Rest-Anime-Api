import path from 'path';

import { Model } from 'objection';

class Studio extends Model {
  static get tableName() {
    return 'studios';
  }
}

export default Studio;
