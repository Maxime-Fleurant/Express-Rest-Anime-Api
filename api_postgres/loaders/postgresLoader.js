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

  console.log(
    {
      client: 'pg',
      conncetion: {
        host: config.postgres_host,
        user: config.postgres_user,
        password: config.postgres_pass,
        database: config.postgres_db
      }
    },
    {
      client: 'pg',
      connection: {
        host: 'postgresql',
        user: 'anidb',
        password: 'pass',
        database: 'anidb'
      }
    }
  );
  await Model.knex(knex);
};
