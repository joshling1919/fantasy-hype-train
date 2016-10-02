import React from 'react';

class FeedAccordion extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isNew: this.props.player.isNew
    };
  }

  storeSeen(){
    this.setState({ isNew: false });

    chrome.storage.local.get('previouslySeen', function(prevSeenObj) {
      prevSeenObj[this.props.player.nflId] = true;
      chrome.storage.local.set({ previouslySeen: prevSeenObj });
    });
    //sneed to test
  }

  toggleAccordion(e){
    e.preventDefault();
    this.storeSeen();
    e.currentTarget.classList.toggle("active");
    e.currentTarget.nextElementSibling.classList.toggle("show");
  }

  markAsSeen(e){
    e.stopPropagation();
    this.storeSeen();
    // probably actually control the isNew props in internal state
    // that way it can first show up, but, if it does change 'onClick'
    // then we can set state so that it stops rendering, and
    // so that it can be stored in the 'seen' object in storage.
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

  accordionLabel(){
    const { player } = this.props;
    if (player.position !== 'DEF') {
      return(
        <span>
          <span>{player.lastName}, {player.firstName[0]}. ({player.teamAbbr}- {player.position})</span>
          <span className="label-stats"> Stats  </span>
          {this.newTag()}
        </span>
      );
    } else {
      return(
        <span>
          <span>{player.firstName} {player.lastName} ({player.position})</span>
          <span className="label-stats"> Stats</span>
          {this.newTag(player.isNew)}
        </span>
      );
    }
  }

  render(){
    const { player } = this.props;
    return (
      <div>
        <button className="accordion"
          onClick={this.toggleAccordion}>{this.accordionLabel()}</button>
        <div className="panel">
          <p>{player.percentOwnedChange}% increase in ownership</p>
          <p>{player.netAdds} net adds</p>
        </div>
      </div>
    );
  }
}

export default FeedAccordion;
