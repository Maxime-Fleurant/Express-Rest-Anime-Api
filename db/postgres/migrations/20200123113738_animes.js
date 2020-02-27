exports.up = knex => {
  return knex.schema
    .createTable('studios', table => {
      table.bigIncrements('id').primary();
      table
        .string('name')
        .notNullable()
        .unique();
    })
    .createTable('animes', table => {
      table
        .bigIncrements('id')
        .unique()
        .primary();
      table.string('romanjiTitle');
      table.string('englishTitle');
      table.string('nativeTitle');
      table.text('description');
      table.string('trailer');
      table.string('xLargeCover');
      table.string('largeCover');
      table.string('mediumCover');
      table.integer('popularity');
      table.date('startDate');
      table.date('endDate');
      table.specificType('avgScore', 'smallInt');
      table
        .bigInteger('studioId')
        .references('id')
        .inTable('public.studios')
        .onDelete('SET NULL');
    })
    .createTable('themes', table => {
      table.bigIncrements('id').primary();
      table.string('name').unique();
    })
    .createTable('genre', table => {
      table.bigIncrements('id').primary();
      table.string('name').unique();
    })
    .createTable('externalLinks', table => {
      table.bigIncrements('id').primary();
      table
        .bigInteger('animeId')
        .references('id')
        .inTable('animes')
        .onDelete('CASCADE');
      table.string('site').notNullable();
      table.string('url').notNullable();
    })
    .createTable('reviews', table => {
      table.bigIncrements('id').primary();
      table
        .bigInteger('animeId')
        .references('id')
        .inTable('animes')
        .onDelete('CASCADE');
      table.specificType('score', 'smallInt');
      table.text('body');
      table.text('summary');
    })
    .createTable('characters', table => {
      table.bigIncrements('id').primary();
      table
        .bigInteger('animeId')
        .references('id')
        .inTable('animes')
        .onDelete('CASCADE');
      table.string('firstName');
      table.string('lastName');
      table.string('nativeName');
      table.string('largeImage');
      table.string('mediumImage');
      table.text('description');
    })
    .createTable('tags', table => {
      table.bigIncrements('id').primary();
      table.string('name').unique();
      table.text('description');
      table
        .bigInteger('themeId')
        .references('id')
        .inTable('themes')
        .onDelete('SET NULL');
    })
    .createTable('animes_tags', table => {
      table
        .bigInteger('animeId')
        .references('id')
        .inTable('animes')
        .onDelete('CASCADE');
      table
        .bigInteger('tagId')
        .references('id')
        .inTable('tags')
        .onDelete('CASCADE');
    })
    .createTable('animes_genres', table => {
      table
        .bigInteger('animeId')
        .references('id')
        .inTable('animes')
        .onDelete('CASCADE');
      table
        .bigInteger('genreId')
        .references('id')
        .inTable('genre')
        .onDelete('CASCADE');
    });
};

exports.down = knex => {};
