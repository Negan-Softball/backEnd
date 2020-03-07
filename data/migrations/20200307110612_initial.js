
exports.up = async function(knex) {
    await knex.schema.createTable('player', (table ) => {
        table.increments('id');
        table.string('name').notNullable().unique();
        table.integer('number').notNullable().unique().unsigned();
    });
    await knex.schema.createTable('position', (table) => {
       table.increments('id');
       table.string('position').notNullable().unique();
    });
    await knex.schema.createTable('field', (table) => {
       table.increments('id');
       table.string('name').notNullable().unique();
       table.string('condition')
    });
    await knex.schema.createTable('team', (table) => {
       table.increments('id');
       table.string('name').notNullable().unique();
       table.integer('win');
       table.integer('loss');
    });
    await knex.schema.createTable('player_note', (table) => {
       table.increments('id');
       table.integer('player_id')
           .references('id')
           .inTable('player')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
       table.string('note').notNullable();
       table.timestamps(true, true);
    });
    await knex.schema.createTable('field_note', (table) => {
       table.increments('id');
       table.integer('field_id')
           .references('id')
           .inTable('field')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
       table.string('note').notNullable();
       table.timestamps(true, true);
    });
    await knex.schema.createTable('player_position', (table) => {
       table.integer('player_id')
           .references('id')
           .inTable('player')
           .onUpdate('CASCADE')
           .onDelete('CASCADE');
       table.integer('position_id')
            .references('id')
            .inTable('position')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
       table.primary(['player_id', 'position_id']);
    });
    await knex.schema.createTable('player_stat', (table) => {
        table.integer('player_id')
            .references('id')
            .inTable('player')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
        table.decimal('average', 4,3).defaultTo(0);
        table.integer('hits').defaultTo(0);
        table.integer('doubles').defaultTo(0);
        table.integer('triples').defaultTo(0);
        table.integer('homeRuns').defaultTo(0);
        table.integer('runs').defaultTo(0);
        table.integer('strikeOuts').defaultTo(0);
        table.primary(['player_id'])
    });
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists('player_stat');
    await knex.schema.dropTableIfExists('player_position');
    await knex.schema.dropTableIfExists('field_note');
    await knex.schema.dropTableIfExists('player_note');
    await knex.schema.dropTableIfExists('team');
    await knex.schema.dropTableIfExists('field');
    await knex.schema.dropTableIfExists('position');
    await knex.schema.dropTableIfExists('player');
};
