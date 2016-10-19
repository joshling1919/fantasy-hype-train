import { receiveFavorites,
         FavoritesConstants
       } from '../actions/favorites_actions';

import { fetchFavorites } from '../util/favorites_api_util';

const FavoritesMiddleware = ({ getState, dispatch }) => next => action => {
  let successFetchedFavorites = favorites => dispatch(receiveFavorites(favorites));

  switch(action.type){
    case FavoritesConstants.REQUEST_FAVORITES:
      fetchFavorites(action.params, successFetchedFavorites);
      return next(action);
    default:
      return next(action);
  }
};

export default FavoritesMiddleware;
