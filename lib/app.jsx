import React from 'react';


import NavBar from './components/nav_bar/nav_bar';
import Body from './components/body/body';


class App extends React.Component {

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
        <NavBar />
        <Body />
          <div>
            Click: {this.props.count}
          </div>
      </div>
    );
  }
}



export default App;
