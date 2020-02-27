exports.seed = async function(knex) {
  const genre = await knex('genre')
    .del()
    .then(function() {
      return knex('genre')
        .returning('id')
        .insert([
          { name: 'dsdmlfk', id: 1 },
          { name: 'dsdmddlfk', id: 2 }
        ]);
    });
  console.log(genre);
};
