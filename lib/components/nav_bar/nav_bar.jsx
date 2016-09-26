import React from 'react';

import SettingButton from './setting_button';

class NavBar extends React.Component{

  render(){
    return(
      <ul className="nav-bar">
        <li className="nav-item"><SettingButton /></li>
        <li className="nav-item">second button</li>
      </ul>
    );
  }
}


export default NavBar;
