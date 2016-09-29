import {combineReducers} from 'redux';

import CountReducer from './count_reducer';
import NavBarReducer from './nav_bar_reducer';
import FeedReducer from './feed_reducer';

export default combineReducers({
  count: CountReducer,
  selectedButton: NavBarReducer,
  feed: FeedReducer
});
