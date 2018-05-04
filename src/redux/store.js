import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

export default function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer, // reducer
    initialState, // preloadedState
    applyMiddleware(thunk),
  );

  return store;
}
