import { FeedConstants } from '../actions/feed_actions';

const initialState = {
  isLoading: false,
  feed: []
};

export default (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case 'REQUEST_PLAYERS':
      newState.isLoading = true;
      newState.feed = state.feed;
      return newState;
    case 'RECEIVE_PLAYERS':
      newState.isLoading = false;
      newState.feed = JSON.parse(action.players);
      return newState;
    default:
      return state;
  }
};
