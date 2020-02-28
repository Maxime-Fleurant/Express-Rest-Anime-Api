const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'postgresql',
    user: 'anidb',
    password: 'pass',
    database: 'anidb'
  }
});

const start = async () => {
  await knex.migrate.latest();
  await knex.seed.run();
  console.log('done');
  knex.destroy();
};

start();
