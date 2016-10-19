import { createCORSRequest, formatFavoritesParams } from './misc_api_util';



const fetchFavorites = function(query, success) {
  //eventually to http://fht-db.herokuapp.com/api/players
  // http://localhost:3000/api/players
  const url = 'http://localhost:3000/api/players/favorites';
  const xhr = createCORSRequest('GET', url + formatFavoritesParams(query));

  if (!xhr) {
    console.log('CORS not supported');
    return;
  }


  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function(data) {
    let response = data.currentTarget;
    if (response.status >= 200 && response.status < 400) {
      success(response.responseText);
    } else {
      console.log(data);
    }
  };

  xhr.onerror = function(error) {
    console.log(error);
    // There was a connection error of some sort
  };
  xhr.send(JSON.stringify(query));
};

export {fetchFavorites};
