document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes() {
  const number = document.querySelector('input[type="number"]').value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response); // returns {type: "success", value: Array(no. of number)}

      let output = '';

      if(response.type === 'success') {
        response.value.forEach(function(a) {
          output += `<li>${a.joke}</li>` // {current parameter, joke in the array }
        });
      } else {
        output += '<li>Something went wrong</li>'
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }
  
  xhr.send();
  
  e.preventDefault();
}
