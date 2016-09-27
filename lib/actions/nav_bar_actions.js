export const NavBarConstants = {
  SETTINGS: "SETTINGS",
  FEED: "FEED"
};


export const goToSettings = () => ({
  type: NavBarConstants.SETTINGS
});


export const goToFeed = () => ({
  type: NavBarConstants.FEED
});
