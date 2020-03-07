exports.seed = async function (knex) {
  await knex('player_stat').truncate();
  await knex('player_position').truncate();
  await knex('field_note').truncate();
  await knex('player_note').truncate();
  await knex('team').truncate();
  await knex('field').truncate();
  await knex('position').truncate();
  await knex('player').truncate();
};
