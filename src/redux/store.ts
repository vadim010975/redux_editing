import {
  combineReducers,
  // compose,
  legacy_createStore
} from "redux";

import pricelistReducer from './pricelistReducer';

// const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

function configureStore() {
  return legacy_createStore(
    combineReducers({
      list: pricelistReducer,
    }),
    undefined,
    // compose(
    //   ReactReduxDevTools,
    // )
  );
}

export default configureStore;