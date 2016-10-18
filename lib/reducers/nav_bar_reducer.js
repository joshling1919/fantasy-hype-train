let initialState = "settings";

if (localStorage.userSettingsOn) {
  initialState = "feed";
}

import { NavBarConstants } from '../actions/nav_bar_actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SETTINGS':
      return "settings";
    case 'FEED':
      return "feed";
    case 'FAVORITES':
      return 'favorites';
    default:
      return state;
  }
};
