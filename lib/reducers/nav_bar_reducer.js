const initialState = "settings";

import { NavBarConstants } from '../actions/nav_bar_actions';

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SETTINGS':
      return "settings";
    case 'FEED':
      return "feed";
    default:
      return state;
  }
};
