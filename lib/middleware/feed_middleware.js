import { receivePlayers,
         FeedConstants
       } from '../actions/feed_actions';

const FeedMiddleware = ({ getState, dispatch }) => next => action => {
  let successFetchedPlayers = players => dispatch(receivePlayers(players));

  switch(action.type){
    case FeedConstants.REQUEST_PLAYERS:
      chrome.storage.local.get(["allPlayers", "previouslySeen"], successFetchedPlayers);
      return next(action);
    default:
      return next(action);
  }
};

export default FeedMiddleware;
