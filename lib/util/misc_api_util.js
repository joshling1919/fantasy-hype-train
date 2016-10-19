const createCORSRequest= (method, url) => {
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
};

const formatParams= ( params ) => {
  return "?" + Object
        .keys(params)
        .map(function(key){
          return key+"="+params[key];
        })
        .join("&");
};
const formatFavoritesParams= ( params ) => {
  return "?" + Object
        .keys(params)
        .map(function(key, index){
          return "fav" + index +"="+key;
        })
        .join("&");
};

export {createCORSRequest, formatParams, formatFavoritesParams};
