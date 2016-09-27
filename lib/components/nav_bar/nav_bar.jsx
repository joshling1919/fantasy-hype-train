import React from 'react';
import Button from 'grommet/components/Button';
import UserSettingsIcon from 'grommet/components/icons/base/UserSettings';
import DatabaseIcon from 'grommet/components/icons/base/Database';

class NavBar extends React.Component{

  render(){
    return(
      <ul className="nav-bar">
        <li className="nav-item">
          <Button icon={<UserSettingsIcon/>}
            onClick={this.props.goToSettings}/>
        </li>
        <li className="nav-item">
          <Button
            icon={<DatabaseIcon/>}
            accent={true}
            onClick={this.props.goToFeed}/>
        </li>
      </ul>
    );
  }
}


export default NavBar;
