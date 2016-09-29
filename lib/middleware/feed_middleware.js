import { receivePlayers,
         FeedConstants
       } from '../actions/feed_actions';


import { fetchPlayers } from '../util/feed_api_util';



export default ({ getState, dispatch }) => next => action => {
  let successFetchedPlayers = players => dispatch(
    receivePlayers(players));
  // const errorCallback = xhr => {
  //   const errors = xhr.responseJSON;
  //   dispatch(receiveErrors(errors));
  // };

  switch(action.type){
    case FeedConstants.REQUEST_PLAYERS:
      fetchPlayers(action.filter, successFetchedPlayers);
      return next(action);
    default:
      return next(action);
  }
};
