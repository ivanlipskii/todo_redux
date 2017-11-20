import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import todoApp from './reducers/reducers';
import DisplayApp from './containers/DisplayApp';

const store = createStore(todoApp, composeWithDevTools(applyMiddleware(thunk)));

render(
  <Provider store={store}>
    <DisplayApp />
  </Provider>,
  document.getElementById('root'),
);
