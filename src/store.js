import { createStore, applyMiddleware, combineReducers } from "redux";
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension'

import StateLoader from './utils/state-loader';

// Reducers
import ui from './reducers/ui';
import user from './reducers/user';
import player from './reducers/player';

const stateLoader = new StateLoader();

const enhancer = composeWithDevTools(
  applyMiddleware(promise)
);

const store = createStore(
  combineReducers({ ui, user, player }),
  stateLoader.loadState(),
  enhancer
);

store.subscribe(() => {
  stateLoader.saveState(store.getState());
});

export default store;