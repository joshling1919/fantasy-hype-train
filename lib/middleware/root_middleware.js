import { applyMiddleware } from 'redux';

import FeedMiddleware from './feed_middleware';
import FavoritesMiddleware from './favorites_middleware';

const RootMiddleware = applyMiddleware(
  FeedMiddleware,
  FavoritesMiddleware
);

export default RootMiddleware;
