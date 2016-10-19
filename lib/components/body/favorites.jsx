import React from 'react';


import FeedAccordion from './feed_accordion';

class Favorites extends React.Component {

  componentDidMount(){
    const favoritesClass = this;
    chrome.storage.local.get('favorites', favObj => {
      const favoritesArr = favoritesClass.props.favorites;
      const favoritesObject = favObj.favorites;
      let changesMade = false;
      for (let i = 0; i < favoritesArr.length; i++) {
        if (!favoritesObject[favoritesArr[i]]) {
          changesMade = true;
          break;
        }
      }
      if (Object.keys(favoritesObject).length !== favoritesArr.length || changesMade) {
        favoritesClass.props.requestFavorites(favoritesObject);
      }
    });
  }

  favoritesList(){
    this.props.favorites.map(favPlayer => {
      return(
        <FeedAccordion player={favPlayer}/>
      );
    });
  }

  render(){
    return(
      <div className="body">
        <div className="favorites">
          Favorites
        </div>
      </div>
    );
  }
}

export default Favorites;
