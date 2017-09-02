const { User } = require('../db');

module.exports = {
  setForm1Information: (form1) => {
    const { username, password, email } = form1;
    return new Promise((resolve, reject) => {
      User.forge({username: username})
      .fetch()
      .then(user => {
        if(user === null) {
          let user = new User();
          user.set('username', username);
          user.set('password', password);
          user.set('email', email);
          user.save()
          .then(result => {
            resolve(result);
          })
          .catch(error => {
            console.log('dbHelpers.js > setForm1Information error: ', error);
            reject(error);
          });
        } else {
          user.set('username', username);
          user.set('password', password);
          user.set('email', email);
          user.save()
          .then(result => {
            resolve(result);
          })
          .catch(error => {
            console.log('dbHelpers.js > setForm1Information error: ', error);
            reject(error);
          });        
        }
      })
      .catch(error => {
        console.log('dbHelpers.js > setForm2Information error: ', error);
        reject(error);
      });
    });   
  },
  setForm2Information: (form2) => {
    const { username, firstname, lastname, telephonenumber } = form2;
    return new Promise((resolve, reject) => {
      User.forge({username: username})
      .fetch()
      .then(user => {
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
  },
  setForm3Information: (form3) => {
    const { username, streetaddress, city, state, zip } = form3;
    return new Promise((resolve, reject) => {
      User.forge({username: username})
      .fetch()
      .then(user => { 
        user.set('streetaddress', streetaddress);
        user.set('city', city);
        user.set('state', state);
        user.set('zip', zip);
        user.save()
        .then(result => resolve({
          streetaddress, 
          city, 
          state, 
          zip
        }))
        .catch(error => {
          console.log('dbHelpers.js > setForm3Information error: ', error);
          reject(error);
        });        
      })
      .catch(error => {
        console.log('dbHelpers.js > setForm3Information error: ', error);
        reject(error);
      });
    });    
  }
};
