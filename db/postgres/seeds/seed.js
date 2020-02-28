const path = require('path');
const csvtojson = require('csvtojson');

exports.seed = async function(knex) {
  const studios = await csvtojson().fromFile(path.join(__dirname, '../datasets/studio.csv'));
  const animes = await csvtojson().fromFile(path.join(__dirname, '../datasets/anime.csv'));
  await knex('studios')
    .del()
    .then(function() {
      return knex('studios').insert(studios);
    });

  await knex('animes')
    .del()
    .then(function() {
      return knex('animes').insert(animes);
    });
};
