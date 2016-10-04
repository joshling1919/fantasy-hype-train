function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

function formatParams( params ){
  return "?" + Object
        .keys(params)
        .map(function(key){
          return key+"="+params[key];
        })
        .join("&");
}

const fetchPlayers = function(query, success) {
  //eventually to http://fht-db.herokuapp.com/api/players
  // http://localhost:3000/api/players
  const url = 'http://localhost:3000/api/players';
  const xhr = createCORSRequest('GET', url + formatParams(query));

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


const storePlayerData = data => {
  const players = JSON.parse(data);

  chrome.storage.local.get("previouslySeen", prevStored => {
    let limit = 50;
    if (players.length < 50) {
      limit = players.length;
    }
    let prevSeen = prevStored.previouslySeen;
    console.log(prevSeen);
    let count = 0;
    for (let i = 0; i < limit; i++) {
      if (!prevSeen[players[i].nflId]) {
        count++;
      }
    }
    if (count > 0) {
      chrome.browserAction.setBadgeText({text: count.toString()});
    }
    chrome.storage.local.set({ allPlayers: players});

  });

};


export { fetchPlayers, storePlayerData };
