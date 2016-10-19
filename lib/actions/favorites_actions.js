export const FavoritesConstants = {
  REQUEST_FAVORITES: "REQUEST_FAVORITES",
  RECEIVE_FAVORITES: "RECEIVE_FAVORITES"
};


export const requestFavorites = (params) => ({
  type: FavoritesConstants.REQUEST_FAVORITES,
  params
});


export const receiveFavorites = favorites => ({
  type: FavoritesConstants.RECEIVE_FAVORITES,
  favorites
});
