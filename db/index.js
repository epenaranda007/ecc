const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'epenaranda',
    password : '',
    database : 'ekacodingchallenge1'
  }
});

const bookshelf = require('bookshelf')(knex);

const User = bookshelf.Model.extend({
  tableName: 'users',
  verifyPassword: function(password) {
    return this.get('password') === password;
  }
});

module.exports = {
  User
};

