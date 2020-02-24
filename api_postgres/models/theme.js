import path from 'path';

import { Model } from 'objection';

class Theme extends Model {
  static get tableName() {
    return 'themes';
  }

  static get relationMappings() {
    const Tag = path.join(__dirname, 'genre');

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

  static async mapExistingTheme(themes) {
    const existingThemes = await this.query().whereIn('name', themes);

    return existingThemes;
  }
}

module.exports = Theme;
