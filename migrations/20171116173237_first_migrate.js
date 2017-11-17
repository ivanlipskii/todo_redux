
exports.up = function(knex, Promise) {
  return (knex.schema.createTable('cities', (table) => {
    table.increments('id').unique().notNullable();
    table.string('city').notNullable();
  }));
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('cities');
};
