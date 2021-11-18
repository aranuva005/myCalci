import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router';
import App from './App';
import RoutePage from './Router'
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RoutePage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


