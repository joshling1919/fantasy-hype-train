import {combineReducers} from 'redux';

import FavoritesReducer from './favorites_reducer';
import NavBarReducer from './nav_bar_reducer';
import FeedReducer from './feed_reducer';

export default combineReducers({
  favorites: FavoritesReducer,
  selectedButton: NavBarReducer,
  feed: FeedReducer
});
