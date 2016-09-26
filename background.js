import {createStore} from 'redux';
import RootReducer from './lib/reducers/root_reducers';

import {wrapStore} from 'react-chrome-redux';

const store = createStore(RootReducer, {});

wrapStore(store, {
  portName: 'example'
});
