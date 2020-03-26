import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import main from './assets/style/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { configureStore  } from "@reduxjs/toolkit";
import  rootReducer  from './reducer/index';
import { Provider } from 'react-redux';

const store = configureStore({reducer: rootReducer.reducer })

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
