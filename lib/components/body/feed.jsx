import React from 'react';

import FeedAccordion from './feed_accordion';
import Loader from './loader';

class Feed extends React.Component {


  componentDidMount(){
    this.props.requestPlayers();
  }

  feed(){
    const playersArray = [];
    this.props.feed.forEach(player => {
      playersArray.push(<FeedAccordion key={player.nflId} player={player}/>);
    });
    return playersArray;
  }

  render(){
    if (this.props.isLoading) {
      return(
        <Loader />
      );
    } else {
      return(
        <div className="body">
          {this.feed()}
        </div>
      );
    }
  }

}


export default Feed;
