import configureStore from './lib/store/store';

import {wrapStore} from 'react-chrome-redux';

const store = configureStore();

wrapStore(store, {
  portName: 'FHT'
});
