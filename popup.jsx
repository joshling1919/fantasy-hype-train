import React from 'react';
import {render} from 'react-dom';
import 'grommet/scss/vanilla/index';


import MyApp from './lib/components/app';

import App from 'grommet/components/App';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store({
  portName: 'example'
});

const unsubscribe = proxyStore.subscribe(() => {
  unsubscribe();
  render(
    <App>
      <Provider store={proxyStore}><MyApp /></Provider>
    </App>
    , document.getElementById('root'));
});
