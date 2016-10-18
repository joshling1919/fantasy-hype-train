export const NavBarConstants = {
  SETTINGS: "SETTINGS",
  FEED: "FEED",
  FAVORITES: "FAVORITES"
};


export const goToSettings = () => ({
  type: NavBarConstants.SETTINGS
});


export const goToFeed = () => ({
  type: NavBarConstants.FEED
});

export const goToFavorites = () => ({
  type: NavBarConstants.FAVORITES
});
