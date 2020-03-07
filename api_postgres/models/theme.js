import path from 'path';

import { Model } from 'objection';

class Theme extends Model {
  static get tableName() {
    return 'themes';
  }

  static get relationMappings() {
    const Tag = path.join(__dirname, 'tag');

    return {
      tags: {
        relation: Model.HasManyRelation,
        modelClass: Tag,
        join: {
          from: 'themes.id',
          to: 'tags.themeId'
        }
      }
    };
  }
}

module.exports = Theme;
