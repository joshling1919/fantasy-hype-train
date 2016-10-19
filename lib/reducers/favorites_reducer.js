import { FavoritesConstants } from '../actions/favorites_actions';

const initialState = {
  isLoading: false,
  favorites: []
};

export default (state = initialState, action) => {
  let newState = {};
  switch (action.type) {
    case 'REQUEST_FAVORITES':
      newState.isLoading = true;
      newState.favorites = state.favorites;
      return newState;
    case 'RECEIVE_FAVORITES':
      newState.isLoading = false;
      newState.favorites = JSON.parse(action.favorites);
      return newState;
    default:
      return state;
  }
};
