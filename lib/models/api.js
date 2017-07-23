function Api() {
  this._content = []
};

Api.prototype.last = function () {
  return this._content[this._content.length - 1];
};

Api.prototype.content = function () {
  return this._content.last();
};

Api.prototype.addContent = function (data) {
  this._content.push(data);
};

Api.prototype.get = function (url, callback = function() {}) {
  var self = this,
   request = new XMLHttpRequest();

  request.open("GET", url, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      var data = JSON.parse(request.responseText);
      self.addContent(data);
      callback();
    } else {
      console.error("Request Failed")
    }
  };
  request.send();
};

Api.prototype.superGet = async function (url) {
  var data = await this.sendRequest(url).then(function (response) {return response})
  console.log(data);
  return data;
};

Api.prototype.sendRequest = function (url) {
  return new Promise((resolve, reject) => {
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = () => resolve(request.responseText);
    request.send();
  });
};
