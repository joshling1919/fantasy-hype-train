import React from 'react';
import {connect} from 'react-redux';

class Count extends React.Component {
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

  render(){
    return(
      <div>
        Click: {this.props.count}
      </div>
    );
  }

}



export default Count;
