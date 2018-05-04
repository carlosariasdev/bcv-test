import { combineReducers } from 'redux';

import match from './match/reducer';

const rootReducer = combineReducers({
  match,
});

export default rootReducer;
