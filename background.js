import {createStore} from 'redux';
import RootReducer from './lib/reducers/root_reducer';
import configureStore from './lib/store/store';

import {wrapStore} from 'react-chrome-redux';

const store = configureStore();

wrapStore(store, {
  portName: 'FHT'
});
