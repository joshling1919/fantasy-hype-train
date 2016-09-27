import React from 'react';
import ReactDOM from 'react-dom';
import 'grommet/scss/vanilla/index';

import configureStore from './lib/store/store';
import Root from './lib/root';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
