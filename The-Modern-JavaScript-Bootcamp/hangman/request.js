const getPuzzle = wordCount => {
  return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    .then(response => {
      // response.json() asynchronously parses the JSON in the response received from the fetch.
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

const getCountry = countryCode => {
  return fetch("http://restcountries.eu/rest/v2/all")
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error("Unable to fetch country data");
      }
    })
    .then(data => {
      const myCountry = data.find(
        country => country.alpha2Code === countryCode
      );
      return myCountry.name;
    });
};

const getLocation = () => {
  return fetch("http://ipinfo.io/json?token=20efd7cde00eea").then(res => {
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error("Unable to fetch location data");
    }
  });
};
