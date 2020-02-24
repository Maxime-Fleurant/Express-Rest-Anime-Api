import path from 'path';

import { Model } from 'objection';

class Studio extends Model {
  static get tableName() {
    return 'studios';
  }

  static get relationMappings() {
    return {
      animes: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'anime'),
        join: {
          from: 'studios.id',
          to: 'animes.studioId'
        }
      }
    };
  }

  static async mapExistingStudio(studio) {
    const existingstudio = await this.query().where('name', studio.name);

    return (
      existingstudio[0] || {
        name: studio.name,
        url: studio.siteUrl
      }
    );
  }
}

export default Studio;
