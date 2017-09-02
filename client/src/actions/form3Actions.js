import axios from 'axios';

const setForm3 = form3 => {
  return {
    type: 'SET_FORM3',
    payload: new Promise((resolve, reject) => {
      axios.put('/api/form3', form3)
      .then(result => {
        const { streetaddress, city, state, zip } = form3;
        if(result.status === 200) { 
          resolve({
            streetaddress,
            city,
            state,
            zip
          });
        }
      })
      .catch(error => console.log('form3Actions.js > SET_FORM3 error: ', error));
    })
  };
};

const resetForm3 = () => {
  return {
    type: 'RESET_FORM3',
    payload: {
      streetaddress: '',
      city: '',
      state: '',
      zip: ''
    }
  };
};

export {
  setForm3,
  resetForm3
};
