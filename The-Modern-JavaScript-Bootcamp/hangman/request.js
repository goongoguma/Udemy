const getPuzzle = wordCount => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Unable to fetch puzzle");
      }
    })
    .then(data => {
      return data.puzzle;
    });
};

const getCountry = countryCode =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();
    countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
    countryRequest.send();
    countryRequest.addEventListener("readystatechange", e => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const countries = JSON.parse(e.target.responseText);
        const myCountry = countries.find(
          country => country.alpha2Code === countryCode
        );
        resolve(myCountry);
      } else if (e.target.readyState === 4) {
        reject("An error has taken place!");
      }
    });
  });
