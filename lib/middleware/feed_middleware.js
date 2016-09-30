import { receivePlayers,
         FeedConstants
       } from '../actions/feed_actions';


import { fetchPlayers } from '../util/feed_api_util';



const FeedMiddleware = ({ getState, dispatch }) => next => action => {
  let successFetchedPlayers = players => dispatch(receivePlayers(players));

  switch(action.type){
    case FeedConstants.REQUEST_PLAYERS:
      fetchPlayers(localStorage, successFetchedPlayers);
      return next(action);
    default:
      return next(action);
  }
};

export default FeedMiddleware;
