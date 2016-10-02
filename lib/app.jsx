import React from 'react';


import NavBarContainer from './components/nav_bar/nav_bar_container';
import BodyContainer from './components/body/body_container';


class App extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="app">
        <NavBarContainer />
        <BodyContainer />
      </div>
    );
  }
}



export default App;
