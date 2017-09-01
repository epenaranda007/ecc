const initialState = {
  username: '',
  password: '',
  email: ''
};

const form1Reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FORM1':
      state = {
        ...state,
        ...action.payload
      };
      break;
  }
  return state;
};

export default form1Reducer;