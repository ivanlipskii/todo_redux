import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import reducers from './reducers/reducers';
import DisplayApp from './containers/DisplayApp';
import { addCity, removeTodo } from './actions/index';

const socket = io('http://localhost:8080');
const socketIoMiddleware = createSocketIoMiddleware(socket, 'server/');

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk, socketIoMiddleware)),
);

socket.on('addNewCity', city => store.dispatch(addCity(city)));
socket.on('removeCity', id => store.dispatch(removeTodo(id)));


render(
  <Provider store={store}>
    <DisplayApp />
  </Provider>,
  document.getElementById('root'),
);
