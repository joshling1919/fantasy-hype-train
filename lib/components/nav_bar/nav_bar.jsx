import React from 'react';

class NavBar extends React.Component{

  render(){
    return(
      <div className="nav-bar">
        <div className="nav-item">
          <button className="nav-button"
            onClick={this.props.goToSettings}>Settings</button>
        </div>
        <div className="nav-item">
          <button className="nav-button"
            onClick={this.props.goToFeed}>Feed</button>
        </div>
      </div>
    );
  }
}


export default NavBar;
