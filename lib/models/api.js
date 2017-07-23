function Api() {
  this._content = [],
  this._response = null;
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
      self.addContent(JSON.parse(request.responseText));
      callback();
    } else {
      console.error("Request Failed")
    }
  };
  request.send();
};

// Api.prototype.superGet = async function (url) {
//   var self = this;
//   var data = await this.sendRequest(url).then(function (response) {
//     self.saveResponse(response)
//   });
//   return data;
// };
//
// Api.prototype.saveResponse = function (response) {
//   this._response = JSON.parse(response);
//   return JSON.parse(response);
// };
//
// Api.prototype.sendRequest = function (url) {
//   return new Promise((resolve, reject) => {
//     var request = new XMLHttpRequest();
//     request.open("GET", url);
//     request.onload = () => resolve(request.responseText);
//     request.send();
//   });
// };
