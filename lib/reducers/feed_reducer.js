import { FeedConstants } from '../actions/feed_actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_PLAYERS':
      return JSON.parse(action.players);
    default:
      return state;
  }
};
