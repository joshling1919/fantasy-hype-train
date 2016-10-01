import React from 'react';
import ReactDOM from 'react-dom';
import "./css/application.scss";

import configureStore from './lib/store/store';
import {Provider} from 'react-redux';

import { fetchPlayers } from './lib/util/feed_api_util';
import AppContainer from './lib/app_container';

import { requestPlayers } from './lib/actions/feed_actions';




document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();
  // window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(
      <Provider store={store}>
        <AppContainer />
      </Provider>
    , root);
});
