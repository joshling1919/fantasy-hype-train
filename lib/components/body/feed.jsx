import React from 'react';

import FeedAccordion from './feed_accordion';

class Feed extends React.Component {


  componentDidMount(){
    this.props.requestPlayers();

    // document.addEventListener('click', () => {
    //   const propsSub = this.props;
    //   debugger;
    //   this.props.dispatch({
    //     type: 'REQUEST_PLAYERS'
    //   });
    // });

    let acc = document.getElementsByClassName("accordion");

    for (let i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
      };
    }
  }

  feed(){
    const arr = [];
    [1,2,3,4,5,6,7,8,9,10].forEach(num => {
      arr.push(<FeedAccordion key={num} title={num}/>);
    });
    return arr;
  }

  render(){

    return(
      <div>
        this is the feeds page
        {this.feed()}

      </div>
    );
  }

}


export default Feed;
