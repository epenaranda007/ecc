const bcrypt = require('bcrypt');

module.exports = {
  encryptPassword: (password) => {
    const salt = bcrypt.genSaltSync(7);
    return bcrypt.hashSync(password, salt);
  }
};
