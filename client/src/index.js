import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import store from './store';
import Home from './components/Home';
import Form1 from './containers/Form1';
import Form2 from './containers/Form2';
import Form3 from './containers/Form3';

const App = () => (
  <MuiThemeProvider>
    <BrowserRouter>
      <Provider store={store}>
        <Switch>
          <Route path="/form1" component={ Form1 } />
          <Route path="/form2" component={ Form2 } />
          <Route path="/form3" component={ Form3 } />
          <Route path="/" component={ Home } />          
        </Switch>
      </Provider>
    </BrowserRouter>
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));