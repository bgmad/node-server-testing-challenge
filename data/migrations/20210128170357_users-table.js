
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments('userId');
        tbl.string('username')
            .notNullable();
        tbl.string('password')
            .notNullable();
        tbl.string('email')
            .notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
