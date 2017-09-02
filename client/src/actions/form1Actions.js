import axios from 'axios';

const setForm1 = form1 => {
  return {
    type: 'SET_FORM1',
    payload: new Promise((resolve, reject) => {
      axios.post('/api/form1', form1)
      .then(result => {
        if(result.status === 201) { 
          resolve(form1);
        }
      })
      .catch(error => console.log('form1Actions.js > SET_FORM1 error: ', error));
    })
  };
};

export {
  setForm1
};
