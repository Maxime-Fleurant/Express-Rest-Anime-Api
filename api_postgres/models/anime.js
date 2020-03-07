import path from 'path';

import { Model } from 'objection';

class Anime extends Model {
  static get tableName() {
    return 'animes';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        romajiTitle: { type: 'string' },
        englishTitle: { type: 'string' },
        nativeTitle: { type: 'string' },
        description: { type: 'string' },
        startDate: { type: 'date' },
        endDate: { type: 'date' },
        nbEpisodes: { type: 'number' },
        trailer: { type: 'string' },
        xLargeCover: { type: 'string' },
        largeCover: { type: 'string' },
        mediumCover: { type: 'string' },
        popularity: { type: 'number' },
        avgScore: { type: 'number' },
        studioId: { type: 'number' },
        genres: { type: 'array' },
        tags: { type: 'string' },
        externalLinks: { type: 'string' },
        characters: { type: 'string' }
      }
    };
  }

  static get relationMappings() {
    return {
      genres: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, 'genre'),
        join: {
          from: 'animes.id',
          through: {
            from: 'animes_genres.animeId',
            to: 'animes_genres.genreId'
          },
          to: 'genres.id'
        }
      },
      tags: {
        relation: Model.ManyToManyRelation,
        modelClass: path.join(__dirname, 'tag'),
        join: {
          from: 'animes.id',
          through: {
            from: 'animes_tags.animeId',
            to: 'animes_tags.tagId'
          },
          to: 'tags.id'
        }
      },
      studio: {
        relation: Model.BelongsToOneRelation,
        modelClass: path.join(__dirname, 'studio'),
        join: {
          from: 'animes.studioId',
          to: 'studios.id'
        }
      },
      externalLinks: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'externalLink'),
        join: {
          from: 'animes.id',
          to: 'externalLinks.animeId'
        }
      },
      reviews: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'review'),
        join: {
          from: 'animes.id',
          to: 'reviews.animeId'
        }
      },
      characters: {
        relation: Model.HasManyRelation,
        modelClass: path.join(__dirname, 'character'),
        join: {
          from: 'animes.id',
          to: 'characters.animeId'
        }
      }
    };
  }
}

export default Anime;
