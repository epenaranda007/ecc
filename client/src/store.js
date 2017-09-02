import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware'

import form1 from './reducers/form1Reducer';
import form2 from './reducers/form2Reducer';
import form3 from './reducers/form3Reducer';

export default createStore(
  combineReducers({
    form1,
    form2,
    form3
  }),
  {},
  applyMiddleware(promise())
);



// Redux Logger
// applyMiddleware(createLogger(), promise())