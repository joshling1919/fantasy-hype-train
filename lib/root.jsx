import React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import AppContainer from './app_container';

const proxyStore = new Store({
  portName: 'FHT'
});

const Root = ({store}) => (
  <Provider store={proxyStore}>
    <AppContainer/>
  </Provider>
);

export default Root;
