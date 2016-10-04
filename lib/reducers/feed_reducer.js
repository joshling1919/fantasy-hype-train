import { FeedConstants } from '../actions/feed_actions';

const initialState = {
  isLoading: false,
  feed: [],
  previouslySeen: {}
};

export default (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case 'REQUEST_PLAYERS':
      newState.isLoading = true;
      newState.feed = state.feed;
      newState.previouslySeen = state.previouslySeen;
      return newState;
    case 'RECEIVE_PLAYERS':
      newState.isLoading = false;
      newState.feed = action.players.allPlayers;
      newState.previouslySeen = action.players.previouslySeen;
      return newState;
    default:
      return state;
  }
};
