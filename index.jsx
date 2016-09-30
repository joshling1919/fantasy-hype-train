import React from 'react';
import ReactDOM from 'react-dom';
import "./css/application.scss";

import configureStore from './lib/store/store';
import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

// import Root from './lib/root';
import { fetchPlayers } from './lib/util/feed_api_util';
import AppContainer from './lib/app_container';

import { requestPlayers } from './lib/actions/feed_actions';




document.addEventListener('DOMContentLoaded', () => {
  const proxyStore = new Store({
    portName: 'FHT'
  });
  const store = configureStore();
  window.fetchPlayers = fetchPlayers;
  window.requestPlayers = requestPlayers;
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(
      <Provider store={proxyStore}>
        <AppContainer />
      </Provider>
    , root);
});
