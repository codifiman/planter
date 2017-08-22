import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import './style.scss';
import { app } from './components/layout/layout.scss';

import { makeStore } from './store/makeStore';
import { Body, Footer, Header } from './components/layout';

if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__ && Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {};
}

export const store = makeStore();

const App = ({ store }) => (
  <Provider store={store}>
    <div className={app}>
      <Header />
      <Body />
      <Footer />
    </div>
  </Provider>
);

ReactDOM.render(
  <App store={store}/>,
  document.getElementById("app")
);
