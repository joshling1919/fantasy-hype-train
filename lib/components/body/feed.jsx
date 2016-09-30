import React from 'react';

import FeedAccordion from './feed_accordion';

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

    return(
      <div className="body">
        this is the feeds page
        {this.feed()}

      </div>
    );
  }

}


export default Feed;
