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

    let limit = 50;
    if (players.length < 50) {
      limit = players.length;
    }
    let currentlyRendered = {};
    for (let i = 0; i < limit; i++) {
      currentlyRendered[players[i].nflId] = true;
      playersArray.push(<FeedAccordion key={players[i].nflId} player={players[i]}/>);
    }
    debugger;
    chrome.storage.local.set({previouslyRendered: currentlyRendered});
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
