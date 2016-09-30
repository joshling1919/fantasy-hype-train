import React from 'react';

class FeedAccordion extends React.Component {

  toggleAccordion(e){
    e.preventDefault();
    e.currentTarget.classList.toggle("active");
    e.currentTarget.nextElementSibling.classList.toggle("show");
  }

  accordionLabel(){
    const { player } = this.props;
    if (player.position !== 'DEF') {
      return(
        <span>
          <span>{player.lastName}, {player.firstName[0]}. ({player.teamAbbr}- {player.position})</span>
          <span>Stats</span>
        </span>
      );
    } else {
      return(
        `${player.firstName} ${player.lastName} (${player.position})`
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
