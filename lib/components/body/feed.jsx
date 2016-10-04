import React from 'react';

import FeedAccordion from './feed_accordion';
import Loader from './loader';

class Feed extends React.Component {


  componentDidMount(){
    this.props.requestPlayers();
  }

  feed(){
    const playersArray = [];
    const players = this.props.feed;
    const prevSeen = this.props.previouslySeen;

    let limit = 50;
    if (players.length < 50) {
      limit = players.length;
    }

    for (let i = 0; i < limit; i++) {
      if (!prevSeen[players[i].nflId]) {
        playersArray.push(<FeedAccordion key={players[i].nflId}
          player={players[i]}/>);
      }

    }

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
