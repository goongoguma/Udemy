document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// GET LOCAL TEXT FILE
function getText() { //'fetch' returns promises
  fetch('test.txt').then(function(b) { // we are fetching 'text'
    return b.text(); // res.text() returns promise 
  }).then(function(a) {
    console.log(a);  // This is a sample text file
    document.getElementById('output').innerHTML = a;
  }).catch(function(err) {
    console.log(err);
  });
}


// GET LOCAL JSON DATA
function getJson() { 
  fetch('posts.json').then(function(b) { 
    return b.json(); 
  })
  .then(function(a) {
    console.log(a);  
    let output = '';
    a.forEach(function(post) {
      output += `<li>${post.title}</li>`;
   });
   document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {
    console.log(err);
  });
}


// GET FROM EXTERNAL API 
function getExternal() { 
  fetch('https://api.github.com/users').then(function(b) {
    return b.json(); 
  })
  .then(function(a) {
    console.log(a);  
    let output = '';
    a.forEach(function(user) {
      output += `<li>${user.login}</li>`;
   });
   document.getElementById('output').innerHTML = output;
  })
  .catch(function(err) {
    console.log(err);
  });
}