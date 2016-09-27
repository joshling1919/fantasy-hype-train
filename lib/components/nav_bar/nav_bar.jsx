import React from 'react';

import SettingButton from './setting_button';

class NavBar extends React.Component{

  render(){
    return(
      <ul className="nav-bar">
        <li className="nav-item">
          <SettingButton handleClick={this.props.goToSettings}/>
        </li>
        <li className="nav-item">
          <button onClick={this.props.goToFeed}>Feed</button>
        </li>
      </ul>
    );
  }
}


export default NavBar;
