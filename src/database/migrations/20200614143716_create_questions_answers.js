
exports.up = function (knex) {
    return knex.schema.createTable('questions_answers', function (table) {
        table.string('id').primary();
        table.string('question').notNullable();
        table.string('answer').notNullable();

        table.string('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('users')
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('questions_answers');
};