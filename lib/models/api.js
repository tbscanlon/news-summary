function Api() {
};

Api.prototype.get = function (url, callback = function() {}) {
   var request = new XMLHttpRequest();

  request.open("GET", url, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var results = JSON.parse(request.responseText);
      callback(results);
    } else {
      console.error("Request Failed")
    }
  };
  request.send();
};
