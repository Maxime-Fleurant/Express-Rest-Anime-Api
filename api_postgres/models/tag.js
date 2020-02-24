import path from 'path';

import { Model } from 'objection';

class Tag extends Model {
  static get tableName() {
    return 'tags';
  }

  static get relationMappings() {
    return {
      animes: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, 'anime'),
        join: {
          from: 'tags.id',
          through: {
            from: 'animes_tags.tagId',
            to: 'animes_tags.animeId'
          },
          to: 'animes.id'
        }
      },
      theme: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, 'theme'),
        join: {
          from: 'tags.themeId',
          to: 'themes.id'
        }
      }
    };
  }

  static async mapExistingTag(tags) {
    let existingTags = await this.query().whereIn(
      'name',
      tags.map(el => el.name)
    );

    const filteredTag = tags.filter(tag => {
      return !existingTags.find(exTags => exTags.name === tag.name);
    });

    existingTags = existingTags.map(tag => {
      return {
        id: tag.id
      };
    });

    return [...existingTags, ...filteredTag];
  }
}

export default Tag;
