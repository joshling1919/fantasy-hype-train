import React from 'react';

class FeedAccordion extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isNew: true
    };
  }

  storeSeen(){
    chrome.storage.local.get('previouslySeen', prevSeenObj => {
      const prevSeen = prevSeenObj.previouslySeen;
      prevSeen[this.props.player.nflId] = true;
      chrome.storage.local.set({ previouslySeen: prevSeen });
      if (this.state.isNew) {
        chrome.browserAction.getBadgeText({}, text => {
          let count = parseInt(text);
          count--;
          chrome.browserAction.setBadgeText({text: count.toString()});
        });
      }
      this.setState({ isNew: false });
    });
  }

  toggleAccordion(e){
    e.preventDefault();
    this.storeSeen.bind(this)();
    e.currentTarget.classList.toggle("active");
    e.currentTarget.nextElementSibling.classList.toggle("show");
  }

  markAsSeen(e){
    e.stopPropagation();
    this.storeSeen.bind(this)();
  }

  newTag(){
    if (this.state.isNew) {
      return(
        <span>
          <span>NEW</span>
          <span onClick={this.markAsSeen.bind(this)}>Seen</span>
        </span>
      );
    }
  }

  toggleFavorites(e){
    e.stopPropagation();
    chrome.storage.local.get('favorites', favoritesObj => {
      let favObj = favoritesObj.favorites;
      if (favObj[this.props.player.nflId]) {
        this.refs.favorite.style.fontWeight = 400;
        delete favObj[this.props.player.nflId];
      } else {
        this.refs.favorite.style.fontWeight = 600;
        favObj[this.props.player.nflId] = true;
      }
      chrome.storage.local.set({'favorites': favObj});
    });
  }

  favorite(){
    return(
      <span ref="favorite"
            onClick={this.toggleFavorites.bind(this)}>Fav</span>
    );
  }

  accordionLabel(){
    const { player } = this.props;
    if (player.position !== 'DEF') {
      return(
        <span>
          <span>{player.lastName}, {player.firstName[0]}. ({player.teamAbbr}- {player.position})</span>
          <span className="label-stats"> Stats  </span>
          {this.newTag()}
          {this.favorite()}
        </span>
      );
    } else {
      return(
        <span>
          <span>{player.firstName} {player.lastName} ({player.position})</span>
          <span className="label-stats"> Stats</span>
          {this.newTag(player.isNew)}
          {this.favorite()}
        </span>
      );
    }
  }

  render(){
    const { player } = this.props;
    return (
      <div>
        <button className="accordion"
          onClick={this.toggleAccordion.bind(this)}>{this.accordionLabel()}</button>
        <div className="panel">
          <p>{player.percentOwnedChange}% increase in ownership</p>
          <p>{player.netAdds} net adds</p>
        </div>
      </div>
    );
  }
}

export default FeedAccordion;
