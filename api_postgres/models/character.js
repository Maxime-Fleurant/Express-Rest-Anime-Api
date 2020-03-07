import path from 'path';

import { Model } from 'objection';

class Character extends Model {
  static get tableName() {
    return 'characters';
  }
}

export default Character;
