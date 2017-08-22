import { compose, createStore } from 'redux';

import { makeRootReducer } from './makeRootReducer';

export const makeStore = (initialState = {}) => {
  const enhancers = [];
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }

  return createStore(
    makeRootReducer(),
    initialState,
    compose(
      ...enhancers,
    )
  );
}
