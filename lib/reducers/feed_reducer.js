import { FeedConstants } from '../actions/feed_actions';

const initialState = {
  isLoading: false,
  feed: [],
  previouslyRendered: {}
};

export default (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case 'REQUEST_PLAYERS':
      newState.isLoading = true;
      newState.feed = state.feed;
      newState.previouslyRendered = state.previouslyRendered;
      return newState;
    case 'RECEIVE_PLAYERS':
      debugger;
      newState.isLoading = false;
      newState.feed = action.players.allPlayers;
      newState.previouslyRendered = action.players.previouslyRendered;
      return newState;
    default:
      return state;
  }
};
