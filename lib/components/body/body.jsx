import React from 'react';

import Settings from './settings';
import Feed from './feed';

class Body extends React.Component {

  render(){
    if (this.props.selectedButton === 'settings') {
      return(
        <Settings />
      );
    } else if (this.props.selectedButton === "feed") {
      return(
        <Feed />
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
