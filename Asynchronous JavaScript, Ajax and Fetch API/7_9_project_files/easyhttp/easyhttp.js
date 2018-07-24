function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make an HTTP POST Request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json'); // setting content type

  let self = this;
  this.http.onload = function() {
  callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data)); // send the data as JSON string
}


// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json'); // setting content type

  let self = this;
  this.http.onload = function() {
  callback(null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data)); // send the data as JSON string
}


// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, 'Post Deleted'); 
    } else {
      callback('Error: ' + self.http.status);
    }
  }

  this.http.send();
}
