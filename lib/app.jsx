import React from 'react';


import NavBar from './components/nav_bar/nav_bar';
import Body from './components/body/body';


class App extends React.Component {



  render() {
    return(
      <div className="app">
        <NavBar />
        <Body />
      </div>
    );
  }
}



export default App;
