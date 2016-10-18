import React from 'react';

import Settings from './settings';
import FeedContainer from './feed_container';
import Favorites from './favorites';

class Body extends React.Component {

  render(){
    if (this.props.selectedButton === 'settings') {
      return(
        <Settings />
      );
    } else if (this.props.selectedButton === "feed") {
      return(
        <FeedContainer />
      );
    } else if (this.props.selectedButton === "favorites") {
      return(
        <Favorites />
      );
    } else {
      return(
        <div>
          body info here
        </div>
      );
    }
  }
}

export default Body;
