function NewsController() {
  this.api = new Api();
  this._headlines = []
};

NewsController.prototype.request = function (url) {
  var self = this;

  this.api.get(url, function (results) {
    self._headlines.push(results);
  });
};
