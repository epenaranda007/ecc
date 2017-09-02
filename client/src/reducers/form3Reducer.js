const initialState = {
  streetaddress: '',
  city: '',
  state: '',
  zip: ''
};

const form3Reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FORM3_FULFILLED':
      state = {
        ...state,
        ...action.payload
      };
      break;
    case 'RESET_FORM3':
      state = {
        ...state,
        ...action.payload
      };
      break;
  }
  return state;
};

export default form3Reducer;