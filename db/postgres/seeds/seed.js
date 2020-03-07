const path = require('path');
const csvtojson = require('csvtojson');

exports.seed = async function(knex) {
  const studios = await csvtojson().fromFile(path.join(__dirname, '../datasets/studio.csv'));
  const animes = await csvtojson().fromFile(path.join(__dirname, '../datasets/anime.csv'));
  const themes = await csvtojson().fromFile(path.join(__dirname, '../datasets/theme.csv'));
  const genres = await csvtojson().fromFile(path.join(__dirname, '../datasets/genre.csv'));
  const externalLinks = await csvtojson().fromFile(path.join(__dirname, '../datasets/externalLink.csv'));
  const reviews = await csvtojson().fromFile(path.join(__dirname, '../datasets/review.csv'));
  const characters = await csvtojson().fromFile(path.join(__dirname, '../datasets/character.csv'));
  const tags = await csvtojson().fromFile(path.join(__dirname, '../datasets/tag.csv'));
  const animesTags = await csvtojson().fromFile(path.join(__dirname, '../datasets/animes_tags.csv'));
  const animesGenres = await csvtojson().fromFile(path.join(__dirname, '../datasets/animes_genres.csv'));

  // await knex('studios')
  //   .del()
  //   .then(function() {
  //     return knex('studios').insert(studios);
  //   });

  // await knex('animes')
  //   .del()
  //   .then(function() {
  //     return knex('animes').insert(animes);
  //   });

  await knex('themes')
    .del()
    .then(function() {
      return knex('themes').insert(themes);
    });

  await knex('genres')
    .del()
    .then(function() {
      return knex('genres').insert(genres);
    });

  // await knex('externalLinks')
  //   .del()
  //   .then(function() {
  //     return knex('externalLinks').insert(externalLinks);
  //   });

  // await knex('reviews')
  //   .del()
  //   .then(function() {
  //     return knex('reviews').insert(reviews);
  //   });

  // await knex('characters')
  //   .del()
  //   .then(function() {
  //     return knex('characters').insert(characters);
  //   });

  await knex('tags')
    .del()
    .then(function() {
      return knex('tags').insert(tags);
    });

  // await knex('animes_tags')
  //   .del()
  //   .then(function() {
  //     return knex('animes_tags').insert(animesTags);
  //   });

  // await knex('animes_genres')
  //   .del()
  //   .then(function() {
  //     return knex('animes_genres').insert(animesGenres);
  //   });
};
