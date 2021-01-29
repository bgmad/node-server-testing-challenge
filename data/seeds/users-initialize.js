const bcrypt = require('bcryptjs');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'tester1', password: bcrypt.hashSync('1234', 10), email: 'tester1@gmail.com'},
        {username: 'tester2', password: bcrypt.hashSync('1234', 10), email: 'tester2@gmail.com'},
        {username: 'tester3', password: bcrypt.hashSync('1234', 10), email: 'tester3@gmail.com'},
      ]);
    });
};
