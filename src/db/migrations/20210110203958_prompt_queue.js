// deno-lint-ignore-file
exports.up = function (knex) {
  return knex.schema.createTable('prompt_queue', (t) => {
    t.increments('id');
    t.integer('promptId')
      .notNullable()
      .unsigned()
      .references('prompts.id')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    t.datetime('startsOn', { precision: 6 }).notNullable();
    t.datetime('endsOn', { precision: 6 }).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('prompt_queue');
};
