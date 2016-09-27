import React from 'react';
import Button from 'grommet/components/Button';
import UserSettingsIcon from 'grommet/components/icons/base/UserSettings';
import SettingButton from './setting_button';

class NavBar extends React.Component{

  render(){
    return(
      <ul className="nav-bar">
        <li className="nav-item">
          <SettingButton handleClick={this.props.goToSettings}/>
          <Button >
            <UserSettingsIcon />
          </Button>
        </li>
        <li className="nav-item">
          <Button label="Feed" onClick={this.props.goToFeed}/>
          <Button label="Feed" accent={true} onClick={this.props.goToFeed}/>
        </li>
      </ul>
    );
  }
}


export default NavBar;
