import React from 'react';

import Settings from './settings';

class Body extends React.Component {

  render(){

    if (this.props.selectedButton === 'settings') {
      return(
        <Settings />
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
