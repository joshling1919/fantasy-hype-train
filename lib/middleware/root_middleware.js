import { applyMiddleware } from 'redux';

import FeedMiddleware from './feed_middleware';

const RootMiddleware = applyMiddleware(
  FeedMiddleware
);

export default RootMiddleware;
