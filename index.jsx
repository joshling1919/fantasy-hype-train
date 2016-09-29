import React from 'react';
import ReactDOM from 'react-dom';
import "./css/application.scss";

import configureStore from './lib/store/store';
import Root from './lib/root';

import { fetchPlayers } from './lib/util/feed_api_util';



document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.fetchPlayers = fetchPlayers;
  const root = document.getElementById('root');
  ReactDOM.render(
      <Root store={store}/>
    , root);
});
