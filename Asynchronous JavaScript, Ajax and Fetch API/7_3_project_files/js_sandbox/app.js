document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN -> it specifies the type of request we want to make
  xhr.open('GET', 'data.txt');

  // console.log('READYSTATE', xhr.readyState); // READYSTATE 1

  // Optional - Used for spinners / loaders
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState) // READYSTATE 3
  };

  xhr.onload = function() { // onload is readyState Values stage 4.
    console.log('READYSTATE', xhr.readyState) // READYSTATE 4
    if(this.status === 200) { // 'this' refers to xhr object
       // console.log(this.responseText);  // returns 'Some plain text data'
       document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>` // retruns 'Some plain text data' in the browser
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {}
  //   console.log(this.responseText); // returns Some plain text data
  // }
  xhr.onerror = function() { // in case of an error 
    console.log('Request error....');
  }

  xhr.send(); // it finallizes everything

    // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready 

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}