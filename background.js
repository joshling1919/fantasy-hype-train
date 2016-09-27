import {createStore} from 'redux';
import RootReducer from './lib/reducers/root_reducer';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(RootReducer, {});

wrapStore(store, {
  portName: 'FHT'
});
