import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import App from './components/App';
import Add from './components/Add';
import reducer from './reducers';

const middleWares = [thunk];

const store = createStore(reducer, applyMiddleware(...middleWares));

ReactDOM.render(
  <Provider store={store}>
    <Add />
    <App />
  </Provider>,
  document.getElementById('root')
);