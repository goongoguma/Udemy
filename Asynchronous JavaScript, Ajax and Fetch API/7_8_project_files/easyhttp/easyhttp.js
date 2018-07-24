// function easyHTTP() {
//   this.http = new XMLHttpRequest();
// }

// // Make HTTP GET Request
// easyHTTP.prototype.get = function(url) {
//   this.http.open('GET', url, true);

//   let that = this;
//   this.http.onload = function() {
//     if(that.http.status === 200) {
//       console.log(that.http.responseText);
//     }
//   }

//   this.http.send();
// }


// Callback
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let that = this;
  this.http.onload = function() {
    if(that.http.status === 200) {
      callback(null, that.http.responseText);
    } else {
      callback('Error: ' + that.http.status);
    }
  }

  this.http.send();
}



// Make HTTP POST Request

// Make HTTP PUT Request

// Make HTTP DELETE Request