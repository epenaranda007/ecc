const { User } = require('../db');

module.exports = {
  setForm1Information: (form1) => {
    const { username, password, email } = form1;
    let user = new User();
    user.set('username', username);
    user.set('password', password);
    user.set('email', email);
    return new Promise((resolve, reject) => {
      user.save()
      .then(result => {
        resolve(result);
      })
      .catch(error => {
        console.log('dbHelpers.js > setForm1Information error: ', error);
        reject(error);
      });
    });    
  },
  setForm2Information: (form2) => { console.log('form2', form2)
    const { username, firstname, lastname, telephonenumber } = form2;
    return new Promise((resolve, reject) => {
      User.forge({username: username})
      .fetch()
      .then(user => { console.log('user', user)
        user.set('firstname', firstname);
        user.set('lastname', lastname);
        user.set('telephonenumber', telephonenumber);
        user.save()
        .then(result => resolve({
          firstname, 
          lastname, 
          telephonenumber
        }))
        .catch(error => {
          console.log('dbHelpers.js > setForm2Information error: ', error);
          reject(error);
        });        
      })
      .catch(error => {
        console.log('dbHelpers.js > setForm2Information error: ', error);
        reject(error);
      });
    });    
  }
};
