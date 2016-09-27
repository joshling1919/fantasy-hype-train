import React from 'react';


import NavBarContainer from './components/nav_bar/nav_bar_container';
import BodyContainer from './components/body/body_container';


class MyApp extends React.Component {

  constructor(props) {
    super(props);

  }

  componentDidMount(){
    document.addEventListener('click', () => {
      const propsSub = this.props;
      this.props.dispatch({
        type: 'ADD_COUNT'
      });
    });
  }


  render() {
    return(
      <div className="app">
        <NavBarContainer />
        <BodyContainer />
          <div>
            Click: {this.props.count}
          </div>
      </div>
    );
  }
}



export default MyApp;
