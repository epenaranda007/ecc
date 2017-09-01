import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          
        </Switch>
      </Provider>
    </BrowserRouter>
  </MuiThemeProvider>
);


ReactDOM.render(<App />, document.getElementById('app'));