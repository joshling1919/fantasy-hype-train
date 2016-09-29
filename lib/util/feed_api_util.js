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

export const fetchPlayers = function(query, success) {
  //eventually to http://fht-db.herokuapp.com/api/players
  const placeholder = formatParams;
  const url = 'http://localhost:3000/api/players';
  const xhr = createCORSRequest('GET', url + formatParams(query));

  if (!xhr) {
    console.log('CORS not supported');
    return;
  }


  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function(data) {
    if (xhr.status >= 200 && xhr.status < 400) {
      // Success!
      // var resp = xhr.responseText;
      success(data);
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
