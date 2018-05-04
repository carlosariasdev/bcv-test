import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from 'redux/store';

import 'styles/app.scss';

import Home from './routes/Home';

const initialState = {};
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app-container'),
);
