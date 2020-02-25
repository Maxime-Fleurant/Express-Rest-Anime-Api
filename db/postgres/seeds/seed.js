exports.seed = function(knex) {
  return knex('genre')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('genre').insert([{ name: 'dsdmlfk' }, { name: 'dd' }]);
    });
};
