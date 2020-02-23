import Knex from 'knex';
import { Model } from 'objection';

import config from '../config/config';

export default async () => {
  const knex = await Knex(config.knex);

  await Model.knex(knex);
};
