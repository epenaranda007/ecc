import axios from 'axios';

const setForm2 = form2 => {
  return {
    type: 'SET_FORM2',
    payload: new Promise((resolve, reject) => {
      axios.put('/api/form2', form2)
      .then(result => {
        const { firstname, lastname, telephonenumber } = form2;
        if(result.status === 200) { 
          resolve({
            firstname: firstname,
            lastname: lastname,
            telephonenumber: telephonenumber
          });
        }
      })
      .catch(error => console.log('form2Actions.js > SET_FORM2 error: ', error));
    })
  };
};

export {
  setForm2
};
