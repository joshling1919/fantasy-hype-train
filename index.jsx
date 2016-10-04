import React from 'react';
import ReactDOM from 'react-dom';
import "./css/application.scss";

import configureStore from './lib/store/store';
import {Provider} from 'react-redux';

import { fetchPlayers } from './lib/util/feed_api_util';
import AppContainer from './lib/app_container';

import { requestPlayers } from './lib/actions/feed_actions';


// ended up needing a window.setTimeout to slightly delay the rendering
// so that popup renders correctly the first time.
window.setTimeout(() => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>
    , root);
}, 10);
