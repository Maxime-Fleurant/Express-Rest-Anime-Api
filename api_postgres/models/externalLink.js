import path from 'path';

import { Model } from 'objection';

class ExternalLink extends Model {
  static get tableName() {
    return 'externalLinks';
  }
}

export default ExternalLink;
