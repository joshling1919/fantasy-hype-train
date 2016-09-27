import React from 'react';
import {render} from 'react-dom';
import 'grommet/scss/vanilla/index';


import App from './lib/components/app';

import {Store} from 'react-chrome-redux';
import {Provider} from 'react-redux';

const proxyStore = new Store({
  portName: 'example'
});

const unsubscribe = proxyStore.subscribe(() => {
  unsubscribe();
  render(
    <Provider store={proxyStore}><App /></Provider>
    , document.getElementById('root'));
});
