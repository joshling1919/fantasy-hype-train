import { receivePlayers,
         FeedConstants
       } from '../actions/feed_actions';


import { fetchPlayers } from '../util/feed_api_util';



export default ({ getState, dispatch }) => next => action => {
  let successFetchedPlayers = players => dispatch(
    receivePlayers(players));

    debugger;
  switch(action.type){
    case FeedConstants.REQUEST_PLAYERS:
      fetchPlayers(localStorage, successFetchedPlayers);
      return next(action);
    default:
      return next(action);
  }
};
