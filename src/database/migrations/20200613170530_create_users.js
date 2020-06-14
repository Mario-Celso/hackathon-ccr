
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('cpf').notNullable();
        table.unique('cpf');
        table.string('name').notNullable();
        table.string('phone').notNullable();
        table.integer('idade').notNullable();
        table.boolean('first_access');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};