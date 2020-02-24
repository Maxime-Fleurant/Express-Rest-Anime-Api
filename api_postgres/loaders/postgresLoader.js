import Knex from 'knex';
import { Model } from 'objection';

import config from '../config/config';

export default async () => {
  const knex = await Knex({
    client: 'postgres',
    conncetion: {
      host: config.postgres_host,
      user: config.postgres_user,
      password: config.postgres_pass,
      database: config.postgres_db
    }
  });

  await Model.knex(knex);
};
