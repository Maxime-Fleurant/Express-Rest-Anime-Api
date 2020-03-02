import Knex from 'knex';
import { Model } from 'objection';

import config from '../config/config';

export default async () => {
  const knex = await Knex({
    client: 'pg',
    connection: {
      host: config.postgres_host,
      user: config.postgres_user,
      password: config.postgres_pass,
      database: config.postgres_db,
      port: config.postgres_port
    }
  });

  await Model.knex(knex);
};
